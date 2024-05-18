import { useState } from 'react';
import { EMAIL_REGEX, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '../../utils/constants';

type SignUpForm = {
	email: string;
	password: string;
};
type SignUpErrors = Partial<{
	email: string;
	password: string;
}>;

const useForm = () => {
	const [form, setForm] = useState<SignUpForm>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<SignUpErrors>({});
	const [hasError, setHasError] = useState(false);

	const validateField = (key: string, value: string) => {
		switch (key) {
			case 'email':
				return !value
					? 'The email is required'
					: !EMAIL_REGEX.test(value)
					? 'The email is not valid'
					: null;

			case 'password':
				return !value
					? 'The password is required.'
					: value.length < PASSWORD_MIN_LENGTH || value.length > PASSWORD_MAX_LENGTH
					? 'The password must be between 6-18 characters.'
					: null;
		}
	};

	const onChangeAndValidate = (key: keyof SignUpForm) => (value:string) => {
		const nextForm = { ...form, [key]: value };
		const nextErrors = Object.keys(nextForm).reduce((errs, nextKey) => {
			const errorKey = nextKey as keyof SignUpForm;
			const nextValue = nextForm[errorKey];
			const nextError = validateField(nextKey as keyof SignUpForm, nextValue);
			if (!nextError) {
				return errs;
			}
			return { ...errs, [nextKey]: nextError };
		}, {});
		const nextHasError = !!Object.keys(nextErrors).length;

		setForm(nextForm);
		setErrors(nextErrors);
		setHasError(nextHasError);
	};

	return { form, errors, hasError, onChangeAndValidate };
};

export default useForm;
