import AsyncStorage from '@react-native-async-storage/async-storage';
import { SignInPayload, SigninResponse, SignupFormProps, SignupOpts } from '../types';
import { PrivateApi, PublicApi } from './base';

export const signUp = async (
	payload: SignupFormProps,
	opts: SignupOpts = {
		firstName: 'Tester',
		lastName: 'Mr',
	},
) => {
	try {
		const response = await PublicApi.post('auth/signup', {
			...opts,
			...payload,
		});
		return response?.data;
	} catch (error) {}
};

export const signIn = async (payload: SignInPayload) => {
	const response: any = await PublicApi.post('auth/signin', payload);
	const userAuth = response?.data?.accessToken;
	if (userAuth) {
		try {
			console.log('saving...');
			await AsyncStorage.setItem('accessToken', userAuth);
			console.log('Access token saved to AsyncStorage');
		} catch (storageError) {
			console.error('Failed to save access token to AsyncStorage:', storageError);
		}
	}

	return response?.data as SigninResponse;
};
