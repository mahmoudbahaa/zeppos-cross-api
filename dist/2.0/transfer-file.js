const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

class TransferFile {
	getInbox = () => {
		throw new Error(UNSUPPORTED);
	};

	getOutbox = () => {
		throw new Error(UNSUPPORTED);
	};
}

export { TransferFile as default };
