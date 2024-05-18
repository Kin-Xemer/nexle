import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'apisauce';

const BaseSauce = create({
  baseURL: 'http://streaming.nexlesoft.com:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

const PrivateSauce = create({
  baseURL: 'http://streaming.nexlesoft.com:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

let store: any = null;
export const initStore = (reduxStore: any) => {
  store = reduxStore;
};

const PublicApi = BaseSauce.axiosInstance;
const PrivateApi = PrivateSauce.axiosInstance;

PrivateApi.interceptors.request.use(async config => {
   const accessToken = await AsyncStorage.getItem('accessToken');
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
  return config;
});

export {PublicApi, PrivateApi};
