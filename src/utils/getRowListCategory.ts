import { Category } from '../types';

export const NUM_CATEGORY_PER_ROW = 3;

const getRowListCategory = (categoryList: Category[]) => {
	const rowList: Category[][] = [];

	categoryList.forEach((category, index) => {
		const rowIndex = Math.floor(index / NUM_CATEGORY_PER_ROW);
		if (!rowList[rowIndex]) {
			rowList[rowIndex] = [];
		}

		rowList[rowIndex].push(category);
	});

	return rowList;
};

export default getRowListCategory;
