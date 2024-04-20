These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

 - [Node.js 14.x+](https://nodejs.org/en/download/)
 - [Python 3.8+](https://www.python.org/downloads/)

## Installing

clone thre repo then run inside

```
npm i
npm run dev
cd test-project
python3 prepare.py
```

This will prepare the test project to run according to the api level defined in app.json and run `zeus dev`

To test other api level just change the api level in the api.json file and rerun

```
python3 prepare.py
```
