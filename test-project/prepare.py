from pathlib import Path
import subprocess
import json
import shutil
import sys
import time
import logging

if __name__=="__main__":
  sourceFolder = Path(".").resolve()

  print("Detecting api level from app.json")  
  with open("app.json", "r") as f:
    app_json = json.load(f)

  APi_LEVEL = app_json["runtime"]["apiVersion"]["minVersion"][:-2]
  print("API Level detected: " + APi_LEVEL)

  apiFolder = sourceFolder / "lib" / "api"
  print("Removing old files")
  if apiFolder.is_dir():
    shutil.rmtree(apiFolder)

  print("Copying corresponding api files")
  shutil.copytree("../dist/" + APi_LEVEL, "lib/api")

  print("Running zeus dev")
  subprocess.run(["zeus", "dev"])
