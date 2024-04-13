const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

const create = id => {
	throw new Error(UNSUPPORTED);
};

const id = {
	PLAYER: 0,
	RECORDER: 1,
};

export { create, id };
