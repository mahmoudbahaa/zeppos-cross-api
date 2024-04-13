const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

const getText = str => {
	throw new Error(UNSUPPORTED);
};

export { getText };
