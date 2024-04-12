These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

 - [Node.js 14.x+](https://nodejs.org/en/download/)
 - [Python 3.8+](https://www.python.org/downloads/)
 - [preprocessor](https://github.com/dcodeIO/Preprocessor.js)
 - [watchdog](https://pypi.org/project/watchdog/)

```
npm i preprocessor -g
pip3 install watchdog
```

## Installing

clone thre repo then run inside

```
python3 prepare_all.py
```

This will preprocess any changed file on save and copy it to all 3 folder so that `zeus dev` would work properly

## Preparation

see example test project for usage.

mainly you have the following:
* 3 versions for app.json sample is provided for each normally you wont need to change  anything except to add new targets or other fields (such as appname and the such)
1. app.json_1.0 
2. app.json_2.0
3. app.json_3.0
* common folder in  assets that is copied to each target in assets folder by script

Steps need to be done:
* Make a copy of your project folder in case something went wrong
* replace all instance of instance of `import something from @zos/module` to `import something from lib/api/module` a replace all in project folder BEFORE coping the files would be helpful. 
* Copy the following to your project folder:
  * `lib/api` folder to your project folder
  * the 3 `app.json_` files and edit them if necessary
  * `prepare_all.py` script file
  * copy of `pre-config.json.template` and rename it to `pre-config.json`
* Edit the `pre-config.json` as follows:
  * `cleanFirst` (`boolean`): delete the previously created folders first, if set to false will overwrite only new files leaving old files that are deleted so not recommded to turn off
  * `sync` (`boolean`): if true then a watchdog is created on source folders to watch for changes and sync them to all api folders
  * `pages` (`string[]`): a list of pages to add to app.json relative to page folder (relative the project folder specified above)
  * `module`(`object`):  extra [module](https://docs.zepp.com/docs/1.0/reference/app-json/#module-object) to add to app.json, app-side (api-side, setting, ..) DONT use api-service as it is only supported on 3.0 and thus won't work on other api levels
  * `sources` (`string[]`) a list of source files/folder to copy to api generated folders and sync if sync is true. Should atleast contains ("page", "app.js") (relative the project folder specified above).

Then run 

```
python3 prepare_all.py
```

to create the 3 api folders 
1) `1.0` that would run on 1.0 and above
2) `2.0` that would run on 2.0 and above
3) `3.0` that would run on 3.0 and above

cd into desired folder and run `zeus dev` or `zeus build` to ensure everything is ok.
