export * from '@zos/display';

const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

const getSettings = () => {
	throw new Error(UNSUPPORTED);
};

export { getSettings };
