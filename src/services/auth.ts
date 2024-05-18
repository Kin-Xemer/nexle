import { SignInPayload, SigninResponse, SignupFormProps, SignupOpts } from '../types';
import { PublicApi } from './base';

export const signUp = async (
	payload: SignupFormProps,
	opts: SignupOpts = {
		firstName: 'Tester',
		lastName: 'Mr',
	},
) => {
	const response = await PublicApi.post('auth/signup', {
		...opts,
		...payload,
	});
	return response?.data;
};

export const signIn = async (payload: SignInPayload) => {
	const response = await PublicApi.post('auth/signup', payload);
	return response?.data as SigninResponse;
};


