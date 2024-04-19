// @ts-ignore
import { cancel, getAllAlarms, set } from '../alarm';

export function testAlarmSet(thisFile) {
  set({ file: thisFile, delay: 10 });
  return 'alarm set';
}

export function testGetAllAlarms(thisFile) {
  return getAllAlarms().join(',');
}

export function testAlarmCancel(thisFile) {
  getAllAlarms().forEach(alarm => {
    cancel(alarm);
  });
  return 'alarm(s) cancelled';
}
