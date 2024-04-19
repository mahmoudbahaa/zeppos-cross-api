/* global hmSetting */
import { UNSUPPORTED } from './_constants';

export const GENDER_MALE = 0;
export const GENDER_FEMALE = 1;
export const GENDER_UNSPECIFIED = 2;
export const getProfile = () => hmSetting.getUserData();
export const addHealthData = () => {
  throw new Error(UNSUPPORTED);
};
