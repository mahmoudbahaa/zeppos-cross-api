<p >
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://raw.githubusercontent.com/mahmoudbahaa/zeppos-cross-api-polyfill/main/assets/common/icon.png" alt="Project logo"></a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/mahmoudbahaa/zeppos-cross-api-polyfill.svg)](https://github.com/mahmoudbahaa/zeppos-cross-api-polyfill/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/mahmoudbahaa/zeppos-cross-api-polyfill.svg)](https://github.com/mahmoudbahaa/zeppos-cross-api-polyfill/pulls)
[![License](https://img.shields.io/badge/license-APACHE-blue.svg)](/LICENSE)

</div>

---

# <div align="center"> ZeppOS cross-api library </div>

## 📝 Table of Contents

- [About](#about)
- [Status](./STATUS.md)
- [Test Status](./TEST_STATUS.md)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](./TODO.md)
- [Contributing](./CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)
- [License](#license)

## 🧐 About <a name = "about"></a>

Write Once deploy on multiple API_LEVEL as minimum.

You write using API_LEVEL 3.0 then generate 3 whole project folders:
* one for 1.0
* one for 2.0
* one for 3.0

## :dart: [Status](./STATUS.md)

## :dart: [Test Status](./TEST_STATUS.md)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

 - [Node.js 14.x+](https://nodejs.org/en/download/)
 - [Python 3.8+](https://www.python.org/downloads/)
 - [preprocessor](https://github.com/dcodeIO/Preprocessor.js)
 - [watchdog](https://pypi.org/project/watchdog/)

```
npm i preprocessor -g
pip3 install watchdog
```

### Installing

clone thre repo then run inside

```
python3 prepare_all.py
```

This will preprocess any changed file on save and copy it to all 3 folder so that `zeus dev` would work properly

## 🎈 Usage <a name="usage"></a>

see example test project for usage.

mainly you have the following:
* 3 versions for app.json sample is provided for each normally you wont need to change targets except to add new targets or other fields
1. app.json_1.0 
2. app.json_2.0
3. app.json_3.0
* common folder in  assets that is copied to each target in assets folder by script
* for configurations edit `pre-config.json`
  * `cleanFirst` (`boolean`): delete the previously created folders first, if set to false will overwrite only new files leaving old files that are deleted so not recommded to turn off
  * `sync` (`boolean`): if true then a watchdog is created on source folders to watch for changes and sync them to all api folders
  * `pages` (`string[]`): a list of pages to add to app.json relative to page folder
  * `module`(`object`):  extra [module](https://docs.zepp.com/docs/1.0/reference/app-json/#module-object) to add to app.json, app-side (api-side, setting, ..) DONT use api-service as it is only supported on 3.0 and thus won't work on other api levels
  * `sources` (`string[]`) a list of source files/folder to copy to api generated folders and sync if sync is true. Should atleast contains ("lib", "page", "app.js")

## ⛏️ Built Using <a name = "built_using"></a>

- [Zepp OS 3.0](https://docs.zepp.com/docs/intro/) - Framework
- [preprocessor](https://github.com/dcodeIO/Preprocessor.js) - javascrit preprocessor
- [watchdog](https://pypi.org/project/watchdog/) watch folder for changes
- modified version of [prepare_all.py](https://github.com/melianmiko/ZeppOS-Toolbox/blob/master/prepare_all.py), [app.json](https://github.com/melianmiko/ZeppOS-Toolbox/blob/master/app.json) and other files from [ZeppOS-Toolbox](https://github.com/melianmiko/ZeppOS-Toolbox) by [melianmiko](https://github.com/melianmiko)

## ✍️ Authors <a name = "authors"></a>

- [@mahmoudbahaa](https://github.com/mahmoudbahaa) - Idea & Initial work

See also the list of [contributors](https://github.com/mahmoudbahaa/zeppos-cross-api-polyfill/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used

## :memo: License <a name = "license"></a>
  
  This project is under license from Apache License V2. For more details, see the [LICENSE](https://raw.githubusercontent.com/mahmoudbahaa/zeppos-cross-api-polyfill/main/LICENSE) file.
