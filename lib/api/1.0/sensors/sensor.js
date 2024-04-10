// #if API==1.0
// /* global hmSetting */
import { Accelerometer } from './sensors/1.0/accelerometer'
import { Barometer } from './sensors/1.0/barometer'
import { Battery } from './sensors/1.0/battery'
import { BloodOxygen } from './sensors/1.0/bloodOxygen'
import { Calorie } from './sensors/1.0/calorie'
import { Compass } from './sensors/1.0/compass'
import { Distance } from './sensors/1.0/distance'
import { FatBurning } from './sensors/1.0/fatBurning'
import { Geolocation } from './sensors/1.0/geolocation'
import { Gyroscope } from './sensors/1.0/gyroscope'
import { HeartRate } from './sensors/1.0/heartRate'
import { Pai } from './sensors/1.0/pai'
import { Screen } from './sensors/1.0/screen'
import { Sleep } from './sensors/1.0/sleep'
import { Stand } from './sensors/1.0/stand'
import { Step } from './sensors/1.0/step'
import { Stress } from './sensors/1.0/stress'
import { Time } from './sensors/1.0/time'
import { Vibrator } from './sensors/1.0/vibrator'
import { Wear } from './sensors/1.0/wear'
import { Weather } from './sensors/1.0/weather'
import { Workout } from './sensors/1.0/workout'
import { WorldClock } from './sensors/1.0/worldClock'
// #endif
// #if API==2.0
// #put "import { Accelerometer } from './sensors/2.0/accelerometer'"
// #put "import { BloodOxygen } from './sensors/2.0/bloodOxygen'"
// #put "import { Compass } from './sensors/2.0/compass'"
// #put "import { Geolocation } from './sensors/2.0/geolocation'"
// #put "import { Gyroscope } from './sensors/2.0/gyroscope'"
// #put "import { HeartRate } from './sensors/2.0/heartRate'"
// #put "import { Screen } from './sensors/2.0/screen'"
// #put "import { Sleep } from './sensors/2.0/sleep'"
// #put "import { Stress } from './sensors/2.0/stress'"
// #put "import { Time } from './sensors/2.0/time'"
// #put "import { Workout } from './sensors/2.0/workout'"
// #put "import { WorldClock } from './sensors/2.0/worldClock'"
// #endif
// #if API!=1.0 && API!=2.0
import * as SENSOR from '@zos/sensor'
export default SENSOR
// #endif
// #if API==2.0
// #put "import * as ORG_SENSOR from '@zos/sensor'"
// #endif
// #if API==1.0 || API==2.0
const _SENSOR = {}
// #endif
// #if API==1.0
_SENSOR.VIBRATOR_SCENE_SHORT_LIGHT = 23
_SENSOR.VIBRATOR_SCENE_SHORT_MIDDLE = 24
_SENSOR.VIBRATOR_SCENE_SHORT_STRONG = 25
_SENSOR.VIBRATOR_SCENE_DURATION = 28
_SENSOR.VIBRATOR_SCENE_DURATION_LONG = 27
_SENSOR.VIBRATOR_SCENE_STRONG_REMINDER = 9
_SENSOR.VIBRATOR_SCENE_NOTIFICATION = 0
_SENSOR.VIBRATOR_SCENE_CALL = 1
_SENSOR.VIBRATOR_SCENE_TIMER = 5
_SENSOR.TIME_HOUR_FORMAT_12 = 0
_SENSOR.TIME_HOUR_FORMAT_24 = 1
_SENSOR.FREQ_MODE_LOW = 0
_SENSOR.FREQ_MODE_NORMAL = 1
_SENSOR.FREQ_MODE_HIGH = 2
// Working partially or fully
_SENSOR.Battery = Battery
_SENSOR.BloodOxygen = BloodOxygen
_SENSOR.Calorie = Calorie
_SENSOR.Distance = Distance
_SENSOR.FatBurning = FatBurning
_SENSOR.HeartRate = HeartRate
_SENSOR.Pai = Pai
_SENSOR.Sleep = Sleep
_SENSOR.Stand = Stand
_SENSOR.Step = Step
_SENSOR.Stress = Stress
_SENSOR.Time = Time
_SENSOR.Vibrator = Vibrator
_SENSOR.Wear = Wear
_SENSOR.Weather = Weather
_SENSOR.WorldClock = WorldClock
// Non existant
_SENSOR.Accelerometer = Accelerometer
_SENSOR.Barometer = Barometer
_SENSOR.Compass = Compass
_SENSOR.Geolocation = Geolocation
_SENSOR.Gyroscope = Gyroscope
_SENSOR.Screen = Screen
_SENSOR.Workout = Workout
// #endif
// #if API==2.0
_SENSOR.BloodOxygen = BloodOxygen
_SENSOR.HeartRate = HeartRate
_SENSOR.Sleep = Sleep
_SENSOR.Stress = Stress
_SENSOR.Time = Time
// Non existant
_SENSOR.Accelerometer = Accelerometer
_SENSOR.Compass = Compass
_SENSOR.Geolocation = Geolocation
_SENSOR.Gyroscope = Gyroscope
_SENSOR.Screen = Screen
_SENSOR.Workout = Workout
_SENSOR.WorldClock = WorldClock
// #endif
// #if API==1.0
// #put "const SENSOR = _SENSOR"
// #put "export default SENSOR"
// #endif
// #if API==2.0
// #put "const SENSOR = { ...ORG_SENSOR, ..._SENSOR }"
// #put "export default SENSOR"
// #endif
