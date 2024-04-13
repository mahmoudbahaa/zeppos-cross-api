export * from '@zos/user';

const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

const addHealthData = () => {
	throw new Error(UNSUPPORTED);
};

export { addHealthData };
