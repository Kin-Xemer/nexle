import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {AuthReducer} from './auth/slice';
import {CategoryReducer} from './category/slice';

// Configure the Redux store
export const store = configureStore({
	reducer: {
		auth: AuthReducer,
		category: CategoryReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
