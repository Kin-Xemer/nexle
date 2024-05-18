import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Background from '../../components/Background';
import Loading from '../../components/Loading';
import Screen from '../../components/Screen';
import ButtonBack from '../../components/Screen/ButtonBack';
import Header from '../../components/Screen/Header';
import { getCategoryList } from '../../redux/category/actions';
import { CategoryActions } from '../../redux/category/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CategoryItem from './CategoryItem';
import styles from './styles';
import Toast from 'react-native-toast-message';
import TextCustom from '../../components/TextCustom';
import image from '../../assets';
import { Category } from '../../types';
import getRowListCategory from '../../utils/getRowListCategory';

const CategoryScreen = () => {
	const navigation = useNavigation<any>();
	const dimension = useWindowDimensions();
	const dispatch = useAppDispatch();
	const safeInset = useSafeAreaInsets();
	const categoryList = useAppSelector(state => state.category.data);
	const pickedList = useAppSelector(state => state.category.pickedList);
	const status = useAppSelector(state => state.category.status);
	const rowList = getRowListCategory(categoryList);

	const checkPickedCategory = (category: Category) =>
		!!pickedList?.find(picked => picked?.id === category?.id);

	const onPressCategory = (category: Category) => {
		const clone = [...pickedList];
		const pickedIndex = clone.findIndex(picked => picked?.id === category?.id);
		if (pickedIndex < 0) {
			dispatch(CategoryActions.setPickedList([...clone, category]));
		} else {
			clone.splice(pickedIndex, 1);
			dispatch(CategoryActions.setPickedList(clone));
		}
	};
	useEffect(() => {
		(async () => {
			try {
				await dispatch(getCategoryList()).unwrap();
				Toast.show({
					type: 'success',
					text1: 'Done!',
					text2: 'Fetch success!',
				});
			} catch (error) {
				console.log('Got error on fetch category list', error);
				Toast.show({
					type: 'error',
					text1: 'Failed!',
					text2: 'Something went wrong!',
				});
			}
		})();
	}, []);

	return (
		<>
			<StatusBar barStyle="light-content" />

			<Background source={image.background.Category} />

			<Screen locations={[0, 0.2, 0.3]}>
				<View style={{ marginTop: dimension.height * 0.3 }} />
				<TextCustom size="xlarge">Wellcome to Nexle Entrance Test</TextCustom>

				<TextCustom style={styles.subTitle} size="medium">
					Please select categories what you would like to
					{'\n'}see on your feed. You can set this later on Filter.
				</TextCustom>

				{!!rowList?.length &&
					rowList.map((row: Category[]) => (
						<View style={styles.categoryRow}>
							{row.map((category, categoryIndex) => (
								<CategoryItem
									data={category}
									index={categoryIndex}
									onPress={onPressCategory}
									isPicked={checkPickedCategory(category)}
								/>
							))}
						</View>
					))}

				<View style={{ height: safeInset.bottom + 33 }} />
			</Screen>

			{status === 'loading' && <Loading />}

			<Header>
				<ButtonBack onPress={navigation.goBack} />

				<TouchableOpacity
					style={[styles.buttonDone, !pickedList?.length ? styles.buttonDoneDisabled : {}]}
					disabled={!pickedList?.length}
				>
					<TextCustom size="large">Done</TextCustom>
				</TouchableOpacity>
			</Header>
		</>
	);
};

export default CategoryScreen;
