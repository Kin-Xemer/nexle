import { EMAIL_REGEX, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "./constants";

export const validateField = (field: string, value: string) => {
	switch (field) {
		case 'email':
			return !value
				? 'The email is required'
				: !EMAIL_REGEX.test(value)
				? 'The email is not valid'
				: '';

		case 'password':
			return !value
				? 'The password is required.'
				: value.length < PASSWORD_MIN_LENGTH || value.length > PASSWORD_MAX_LENGTH
				? 'The password must be between 6-18 characters.'
				: '';
		default: return ""
	}
};
