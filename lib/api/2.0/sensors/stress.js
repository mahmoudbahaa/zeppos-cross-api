import { Stress as Strss } from '@zos/sensor';
import { UNSUPPORTED } from '.././_constants';

export class Stress {
	#stress;
	constructor() {
		this.#stress = new Strss();
	}

	getCurrent = () => this.#stress.getCurrent();
	onChange = callback => this.#stress.onChange(callback);
	offChange = callback => this.#stress.offChange(callback);

	getToday = () => {
		throw new Error(UNSUPPORTED);
	};

	getTodayByHour = () => {
		throw new Error(UNSUPPORTED);
	};

	getLastWeek = () => {
		throw new Error(UNSUPPORTED);
	};

	getLastWeekByHour = () => {
		throw new Error(UNSUPPORTED);
	};
}
