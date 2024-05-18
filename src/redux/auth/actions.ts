import {createAsyncThunk} from '@reduxjs/toolkit';
import  { signIn, signUp } from '../../services/auth';
import { SignupFormProps, SignupOpts } from '../../types';

export const signUpAndSignIn = createAsyncThunk(
	'auth/signUpAndSignIn',
	async (payload: SignupFormProps & SignupOpts) => {
		await signUp(payload);
		const auth = signIn(payload);
		return auth;
	},
);
