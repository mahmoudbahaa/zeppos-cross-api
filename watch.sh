#!/bin/bash
 
if [ -z "$(which inotifywait)" ]; then
    echo "inotifywait not installed."
    echo "In most distros, it is available in the inotify-tools package."
    exit 1
fi
 
curDir=$(pwd)
inotifywait -r -e move,delete,close_write,moved_to -m lib page app.js |
while read -r directory events filename; do
  echo $events
  if [ $events == "MOVED_FROM" ]; then
    rm "1.0/"$directory$filename
    rm "2.0/"$directory$filename
    rm "3.0/"$directory$filename
    echo "Removed" $directory$filename
  else
    python3 prepare.py $directory$filename
    if (($? == 0)); then
      echo "Updated" $directory$filename
    else
      echo "Failed to Update" $directory$filename
    fi
  fi
done