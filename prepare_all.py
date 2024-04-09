from pathlib import Path
import subprocess
import json
import shutil
import os 

delete=False
sourceFolder = Path(".").resolve()
common_assets = sourceFolder / "assets" / "common"

pages = [
  "home"
]

module = {
  # "app-side": {
  #   "path": "app-side/index"
  # }
}

sources = {
  "lib",
  "page",
  "app.js"
}



def preprocess(source, target, APi_LEVEL):
  if source.is_dir():
      if not target.exists():
        target.mkdir()
      
      for subfileOrFolder in source.iterdir():
         preprocess(subfileOrFolder, target / subfileOrFolder.name, APi_LEVEL)
  else:
    with target.open(mode='w') as outfile:
      subprocess.run(["preprocess", source, ".", "-API=" + APi_LEVEL], stdout=outfile)
    
def createProject(APi_LEVEL):
  project = Path("./" + APi_LEVEL).resolve()
  #clean
  if delete and project.is_dir():
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
    if (not assets_dir.exists()):
      assets_dir.mkdir()

    shutil.copy(common_assets / "icon.png", assets_dir / "icon.png")
    # App.json
    app_json["targets"][target_id]["module"] = {
      "page": {
        "pages": [f"page/{i}" for i in pages]
      },
      **module
    }

  with open(project / "app.json", "w") as f:
    f.write(json.dumps(app_json, indent=2, ensure_ascii=False))

createProject("1.0")
createProject("2.0")
createProject("3.0")