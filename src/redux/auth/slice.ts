import { createSlice } from '@reduxjs/toolkit';
import { signUpAndSignIn } from './actions';
import { InitState } from '../../types';

const INITIAL_STATE: InitState = {
	user: undefined,
	accessToken: '',
	refreshToken: '',
};

const Slice = createSlice({
	name: 'auth',
	initialState: INITIAL_STATE,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(signUpAndSignIn.fulfilled, (state, action) => {
			state.accessToken = action.payload?.accessToken;
			state.refreshToken = action.payload?.refreshToken;
			state.user = action.payload?.user;
		});
	},
});

export const { reducer: AuthReducer } = Slice;
