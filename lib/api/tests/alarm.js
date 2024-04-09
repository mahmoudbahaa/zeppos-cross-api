import Alarm from '../alarm'

export function testAlarmSet (thisFile) {
  Alarm.set({ file: thisFile, delay: 10 })
  return 'alarm set'
}

export function testGetAllAlarms (thisFile) {
  // @ts-ignore
  return Alarm.getAllAlarms().join(',')
}

export function testAlarmCancel (thisFile) {
  // @ts-ignore
  Alarm.getAllAlarms().forEach(alarm => {
    Alarm.cancel(alarm)
  })
  return 'alarm(s) cancelled'
}
