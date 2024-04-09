from pathlib import Path
import sys
import subprocess
 
# total arguments
n = len(sys.argv)

if (n < 2 or n > 3):
  print("Need 1 or 2 arguments first filePath and second API_LEVELs comma separated Got:", n-1)
  exit(1)

if (n == 3):
  APi_LEVELS = sys.argv[2].split(',')
else:
  APi_LEVELS = ["1.0", "2.0", "3.0"]

for APi_LEVEL in APi_LEVELS:
  if APi_LEVEL != "1.0" and APi_LEVEL != "2.0" and APi_LEVEL != "3.0":
    print("API_LEVEL can only be: '1.0' or '2.0' or '3.0'")
    exit(1)

source = Path("./" + sys.argv[1]).resolve()

if not source.exists():
  print("Source doesn't exist")
  exit(1)

if source.is_dir():
  print("Source is a folder")
  exit(1)

for APi_LEVEL in APi_LEVELS:
  target = Path("./" + APi_LEVEL + "/" + sys.argv[1]).resolve()
  with target.open(mode='w') as outfile:
    subprocess.run(["preprocess", source, ".", "-API=" + APi_LEVEL], stdout=outfile)
