import { BloodOxygen as BO } from '@zos/sensor';
import { UNSUPPORTED } from '.././_constants';

export class BloodOxygen {
	#spo2;
	constructor() {
		this.#spo2 = new BO();
	}

	getCurrent = () => this.#spo2.getCurrent();
	getLastDay = () => this.#spo2.getLastDay();
	start = () => this.#spo2.start();
	stop = () => this.#spo2.stop();
	onChange = callback => this.#spo2.onChange(callback);
	offChange = callback => this.#spo2.offChange(callback);
	getLastFewHour = hour => {
		throw new Error(UNSUPPORTED);
	};
}
