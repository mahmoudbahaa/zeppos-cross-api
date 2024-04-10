<div align="center">
  <a href="" rel="noopener">
 <img width=128px height=128px src="https://raw.githubusercontent.com/mahmoudbahaa/zeppos-cross-api-polyfill/main/assets/common/icon.png" alt="Project logo"></a>
</div>

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
- [Usage](#usage)
- [Advanced USage](./ADVANCED_USAGE.md)
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

Or Change API level of your project on the fly just with one command and same codebase

## :dart: [Status](./STATUS.md)

## :dart: [Test Status](./TEST_STATUS.md)

## 🏁 Usage <a name = "Usage"></a>

```
npm i zeppos-cross-api
```

then run 

```
npx zeppos-cross-api --api-level=X.0
```
where X is 1, 2 or 3 according to your project ( you still write your code using API_LEVEL 3) and can changethe min API again as easily as running above command again with new API_LEVEL

then replace each instance of '@zepos' with 'zeppos-cross-api' and you good to go

## 🏁 [Advanced USage](./ADVANCED_USAGE.md)

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
