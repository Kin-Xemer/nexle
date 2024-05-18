import { createAsyncThunk } from '@reduxjs/toolkit';
import { getList } from '../../services/category';

export const getCategoryList = createAsyncThunk('category/getList', async () => {
	const categoryList = await getList();
	return categoryList;
});
