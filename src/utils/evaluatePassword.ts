import {
	Colors,
	Level,
	REGEX_CONTAIN_DIGIT,
	REGEX_CONTAIN_LOWER,
	REGEX_CONTAIN_SPECIAL_CHAR,
	REGEX_CONTAIN_UPPER,
} from './constants';

export const getLevelEvaluate = (level?: Level) => {
	switch (level) {
		case Level.Fair:
			return { progress: 2, color: Colors.WARNING };
		case Level.Good:
			return { progress: 3, color: Colors.PRIMARY };
		case Level.Strong:
			return { progress: 4, color: Colors.SUCCESS };
		case Level.Weak:
		default:
			return { progress: 1, color: Colors.ERROR };
	}
};

export const evaluatePassword = (password: string) => {
	if (!password || password.length < 6 || password.length > 18) {
		return Level.Weak;
	}
	let levelValue = 1;

	if (REGEX_CONTAIN_UPPER.test(password) && REGEX_CONTAIN_LOWER.test(password)) levelValue += 1;
	if (REGEX_CONTAIN_DIGIT.test(password)) levelValue += 1;
	if (REGEX_CONTAIN_SPECIAL_CHAR.test(password)) levelValue += 1;

	switch (levelValue) {
		case 2:
			return Level.Fair;
		case 3:
			return Level.Good;
		case 4:
			return Level.Strong;
		case 1:
		default:
			return Level.Weak;
	}
};
