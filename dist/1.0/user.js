const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

/* global hmSetting */

const GENDER_MALE = 0;
const GENDER_FEMALE = 1;
const GENDER_UNSPECIFIED = 2;
const getProfile = () => hmSetting.getUserData();
const addHealthData = () => {
	throw new Error(UNSUPPORTED);
};

export { GENDER_FEMALE, GENDER_MALE, GENDER_UNSPECIFIED, addHealthData, getProfile };
