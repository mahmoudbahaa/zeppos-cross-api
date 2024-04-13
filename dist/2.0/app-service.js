const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

const exit = () => {
	throw new Error(UNSUPPORTED);
};

const getAllAppServices = () => {
	throw new Error(UNSUPPORTED);
};

const start = option => {
	throw new Error(UNSUPPORTED);
};

const stop = option => {
	throw new Error(UNSUPPORTED);
};

export { exit, getAllAppServices, start, stop };
