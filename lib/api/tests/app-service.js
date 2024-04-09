import APP_SERVICE from '../app-service'

export function testAppServiceStart (appServiceFile) {
  return APP_SERVICE.start({
    file: appServiceFile,
    complete_func: (result) => {
      console.log(result.file)
      console.log(result.result)
    }
  }).toString()
}

export function testAppServiceStop (appServiceFile) {
  return APP_SERVICE.stop({
    file: 'dummyService',
    complete_func: (result) => {
      console.log(result.file)
      console.log(result.result)
    }
  }).toString()
}

export function testGetAllAppServices () {
  return APP_SERVICE.getAllAppServices().toString()
}

export function testAppServiceExit () {
  return 'can only be called in app service, Not Called'
}
