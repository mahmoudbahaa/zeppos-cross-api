import { UNSUPPORTED } from './_constants';
export default class TransferFile {
	getInbox = () => {
		throw new Error(UNSUPPORTED);
	};

	getOutbox = () => {
		throw new Error(UNSUPPORTED);
	};
}
