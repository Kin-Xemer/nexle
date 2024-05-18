export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const FOCUS_VALUE = 1;
export const BLUR_VALUE = 0.01;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 18;
export const REGEX_CONTAIN_UPPER = /[A-Z]/;
export const REGEX_CONTAIN_LOWER = /[a-z]/;
export const REGEX_CONTAIN_DIGIT = /\d/;
export const REGEX_CONTAIN_SPECIAL_CHAR = /\W/;
export const NUM_CATEGORY_PER_ROW = 3;
export const MARGIN_CATEGORY_ITEM = 8;

export const Colors = {
  PRIMARY: '#647FFF',
  SECONDARY: '#434343',
  TEXT_LIGHT: '#FFFFFF',
  TEXT_GRAY: '#FFFFFFF0',
  SUCCESS: '#91E2B7',
  WARNING: '#E3A063',
  ERROR: '#E05151',
};
export enum Level {
	Weak = 'Weak',
	Fair = 'Fair',
	Good = 'Good',
	Strong = 'Strong',
}