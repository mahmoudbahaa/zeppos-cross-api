import { UNSUPPORTED } from './_constants';

export * from '@zos/display';
export const getSettings = () => {
	throw new Error(UNSUPPORTED);
};
