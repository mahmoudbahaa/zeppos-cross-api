export * from '@zos/settings';

const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

const getSystemMode = () => {
	throw new Error(UNSUPPORTED);
};

export { getSystemMode };
