from pathlib import Path
import subprocess
import json
import shutil
import sys
import time
import logging
# from watchdog.observers import Observer
from watchdog.observers.polling import PollingObserver as Observer
from watchdog.events import * 

sourceFolder = Path(".").resolve()
common_assets = sourceFolder / "assets" / "common"

configFile = sys.argv[1] if len(sys.argv) == 2 else "pre-config.json"
if not Path(configFile).exists():
  print("config file does not exist")
  exit(1)
# Load configurations
with open(configFile, "r") as f:
  config_json = json.load(f)  

cleanFirst = config_json["cleanFirst"]
pages = config_json["pages"]
module = config_json["module"]
sources = config_json["sources"]
apis = config_json["apis"]
sync = config_json["sync"]

def preprocess(source, target, APi_LEVEL):
  if source.is_dir():
      if not target.exists():
        target.mkdir()
      
      for subfileOrFolder in source.iterdir():
         preprocess(subfileOrFolder, target / subfileOrFolder.name, APi_LEVEL)

      if len(list(target.iterdir())) == 0:
        target.rmdir()
  else:
    with target.open(mode='w') as outfile:
      subprocess.run(["preprocess", source, ".", "-API=" + APi_LEVEL], stdout=outfile)
    contents = re.sub(r"[\n\t\s]+", "", target.read_text())
    if len(contents) == 0:
      target.unlink()

    
def createProject(APi_LEVEL):
  project = Path("./" + APi_LEVEL).resolve()
  #clean
  if cleanFirst and project.is_dir():
    shutil.rmtree(project)
  if (not project.exists()):
    project.mkdir()

  #process source code
  for fileOrFolder in sources:
    preprocess(sourceFolder / fileOrFolder, project / fileOrFolder, APi_LEVEL)

  with open("app.json_" + APi_LEVEL, "r") as f:
    app_json = json.load(f)


  #make assets dir
  assets_dir = project / "assets"
  if (not assets_dir.exists()):
    assets_dir.mkdir()

  if APi_LEVEL=="1.0":
    targets = { "band-7": 24, "dialog": 32, "nxp": 32, "mhs": 32, }
  elif APi_LEVEL=="2.0":
    targets = { "dialog": 32, "nxp": 32, }
  else:
    targets = { "gt": 32, }


  # Prepare assets
  for target_id in targets:
    icon_size = targets[target_id]
    assets_dir = project / "assets" / (target_id + (".r" if APi_LEVEL =="3.0" else ""))
    if assets_dir.exists():
      assets_dir.rmdir()

    shutil.copytree(common_assets, assets_dir)
    # App.json
    app_json["targets"][target_id]["module"] = {
      "page": {
        "pages": [f"page/{i}" for i in pages]
      },
      **module
    }

  with open(project / "app.json", "w") as f:
    f.write(json.dumps(app_json, indent=2, ensure_ascii=False))
  print("Created project for api level: '" + APi_LEVEL + "'")

class OnMyWatch:
    def __init__(self, watchDirectory):
        self.observer = Observer()
        self.watchDirectory = watchDirectory
 
    def run(self):
        event_handler = Handler()
        self.observer.schedule(
           event_handler, 
           self.watchDirectory, 
           recursive = True, 
           event_filter = [
              # FileOpenedEvent, 
              # FileClosedEvent,
              FileCreatedEvent,
              FileDeletedEvent,
              FileModifiedEvent,
              FileMovedEvent,
              FileSystemEvent
              ]
              )
        self.observer.start()
        return self

class Handler(FileSystemEventHandler):
 
  @staticmethod
  def on_any_event(event):
    if event.event_type == 'deleted':
      print(("Directory" if event.is_directory else "File") + " deleted: " + event.src_path)
      for api_level in apis:
        if Path(api_level + "/" + event.src_path).exists():
          subprocess.run(["rm", "-r", api_level + "/" + event.src_path])

    elif event.event_type == 'created':
      if event.is_directory:
        print("Directory created: " + event.src_path)
        for api_level in apis:
          if not Path(api_level + "/" + event.src_path).exists:
            subprocess.run(["mkdir", api_level + "/" + event.src_path])
      else:
        print("File created: " + event.src_path)
        for api_level in apis:
          subprocess.run(["touch", api_level + "/" + event.src_path])
 
    elif event.event_type == 'modified' and not event.is_directory:
        print("File modified: " + event.src_path)
        input = Path(event.src_path)
        for api_level in apis:
          target = Path(api_level + "/" + event.src_path)
          target.parent.mkdir(parents=True, exist_ok=True)
          with target.open(mode='w') as outfile:
            subprocess.run(["preprocess", input , ".", "-API=" + api_level], stdout=outfile)
          contents = re.sub(r"[\n\t\s]+", "", target.read_text())
          if len(contents) == 0:
            target.unlink()
            while (len(list(target.parent.iterdir())) == 0):
              target.parent.rmdir()
              target = target.parent

    elif event.event_type == 'moved':
      moved = False
      for api_level in apis:
        if Path(api_level + "/" + event.src_path).exists():
          moved = True
          Path(api_level + "/" + event.dest_path).parent.mkdir(parents= True, exist_ok=True)
          subprocess.run(["mv", api_level + "/" + event.src_path, api_level + "/" + event.dest_path])

      if moved:
        type = "Folder" if event.is_directory else "File"
        print(type + " moved from: " + event.src_path + " to: " + event.dest_path)

    # else:
      # print("Unhandled " + event.event_type + " : " + event.src_path)

if __name__=="__main__":    
  print("Creating project for api levels: '" + "', '".join(apis) + "'")  
  for api_level in apis:
    createProject(api_level)

  if (sync):
    print("sync is true setting up watchdog")
    print("Please keep open")
    print("Press CTRL + C when done developing to exit")
    watchers = []
    for path in sources:
      watch = OnMyWatch(path)
      watchers.append(watch.run())

    try:
      while True:
        time.sleep(5)
    except:
      for watcher in watchers:
        watcher.observer.stop()
      print("Observers Stopped")
      for watcher in watchers:
        watcher.observer.join()
  else:
    print("Watch changes is false exiting")