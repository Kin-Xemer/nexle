import { PrivateApi } from './base';

export const getList = async () => {
	const response = await PrivateApi.get('categories');
	return response?.data;
};
