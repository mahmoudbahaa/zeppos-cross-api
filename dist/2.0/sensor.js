import{BloodOxygen as t,Geolocation as r,HeartRate as e,SLEEP as o,Time as n,Stress as s}from"@zos/sensor";export*from"@zos/sensor";import{U as a}from"./_constants-Cre2CkpB.js";class Accelerometer{start(){throw new Error(a)}stop(){throw new Error(a)}getCurrent(){throw new Error(a)}onChange(t){throw new Error(a)}offChange(t){throw new Error(a)}setFreqMode(t){throw new Error(a)}getFreqMode(){throw new Error(a)}}class BloodOxygen{constructor(){this._spo2=new t}getCurrent(){return this._spo2.getCurrent()}getLastDay(){return this._spo2.getLastDay()}start(){this._spo2.start()}stop(){this._spo2.stop()}onChange(t){this._spo2.onChange(t)}offChange(t){this._spo2.offChange(t)}getLastFewHour(t){throw new Error(a)}}class Compass{start(){throw new Error(a)}stop(){throw new Error(a)}getStatus(){throw new Error(a)}getDirection(){throw new Error(a)}getDirectionAngle(){throw new Error(a)}onChange(t){throw new Error(a)}offChange(t){throw new Error(a)}}class Geolocation{constructor(){this._geo=new r}start(){this._geo.start()}stop(){this._geo.stop()}getStatus(){return this._geo.getStatus()}getLatitude(t){return this._geo.getLatitude(t)}getLongitude(t){return this._geo.getLongitude(t)}onChange(t){this._geo.onChange(t)}offChange(t){this._geo.offChange(t)}getSetting(){throw new Error(a)}onGnssChange(t){throw new Error(a)}offGnssChange(t){throw new Error(a)}}class Gyroscope{start(){throw new Error(a)}stop(){throw new Error(a)}getCurrent(){throw new Error(a)}onChange(t){throw new Error(a)}offChange(t){throw new Error(a)}setFreqMode(t){throw new Error(a)}getFreqMode(){throw new Error(a)}}class HeartRate{constructor(){this._heart(new e)}getCurrent(){return this._heart.getCurrent()}getLast(){return this._heart.getLast()}getToday(){return this._heart.getToday()}onCurrentChange(t){return this._heart.onCurrentChangee(t)}offCurrentChange(t){return this._heart.offCurrentChange(t)}onLastChange(t){return this._heart.onLastChange(t)}offLastChange(t){return this._heart.offLastChange(t)}getDailySummary(){throw new Error(a)}getResting(){throw new Error(a)}getAFibRecord(){throw new Error(a)}onRestingChange(t){throw new Error(a)}offRestingChange(t){throw new Error(a)}}class Screen{getStatus(){throw new Error(a)}getAodMode(){throw new Error(a)}onChange(t){throw new Error(a)}offChange(t){throw new Error(a)}}class Sleep{constructor(){this._sleep=new o}updateInfo(){return this._sleep.updateInfo()}getInfo(){return this._sleep.getInfo()}getStageConstantObj(){return this._sleep.getStageConstantObj()}getStage(){return this._sleep.getStage()}getSleepingStatus(){const t=Math.floor((new n).getTime()/6e4)%1440,r=this.getInfo();return t>r.startTime&&t<r.endTime?1:0}getNap(){throw new Error(a)}}class Stress{constructor(){this._stress=new s}getCurrent(){return this._stress.getCurrent()}onChange(t){this._stress.onChange(t)}offChange(t){this._stress.offChange(t)}getToday(){throw new Error(a)}getTodayByHour(){throw new Error(a)}getLastWeek(){throw new Error(a)}getLastWeekByHour(){throw new Error(a)}}class Time{constructor(){this._time=new n}getTime(){return this._time.getTime()}getFullYear(){return this._time.getFullYear()}getMonth(){return this._time.getMonth()}getDate(){return this._time.getDate()}getHours(){return this._time.getHours()}getMinutes(){return this._time.getMinutes()}getSeconds(){return this._time.getSeconds()}getDay(){return this._time.getDay()}getHourFormat(){return this._time.getHourFormat()}getFormatHour(){return this._time.getFormatHour()}onPerMinute(t){this._time.onPerMinute(t)}onPerDay(t){this._time.onPerDay(t)}getFestival(){return this._time.getFestival()}getLunarYear(){return this._time.getLunarYear()}getLunarMonth(){return this._time.getLunarMonth()}getLunarDay(){return this._time.getLunarDay()}getLunarFestival(){return this._time.getLunarFestival()}getSolarTerm(){return this._time.getSolarTerm()}getShowFestival(){return this._time.getShowFestival()}getLunarMonthCalendar(){return this._time.getLunarMonthCalendar()}onSunrise(t){throw new Error(a)}onSunset(t){throw new Error(a)}onPhoneTimeSetting(t){throw new Error(a)}}class Workout{getStatus(){throw new Error(a)}getHistory(){throw new Error(a)}}class WorldClock{getCount(){throw new Error(a)}getInfo(t){throw new Error(a)}}export{Accelerometer,BloodOxygen,Compass,Geolocation,Gyroscope,HeartRate,Screen,Sleep,Stress,Time,Workout,WorldClock};