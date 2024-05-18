/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles as screenStyles } from '../../../components/Screen';
import { Category } from '../../../redux/category/slice';
import { NUM_CATEGORY_PER_ROW } from '../useCategoryRowList';
import { Colors } from '../../../utils/constants';
import TextCustom from '../../../components/TextCustom';

type CategoryItemProps = {
	data: Category;
	index: number;
	onPress?: (data: Category) => void;
	isPicked: boolean;
};

export const MARGIN_CATEGORY_ITEM = 8;

const CategoryItem: React.FC<CategoryItemProps> = props => {
	const dimension = useWindowDimensions();
	const category = props.data;

	const categoryWidth =
		(dimension.width -
			screenStyles.linear.paddingHorizontal * 2 -
			MARGIN_CATEGORY_ITEM * (NUM_CATEGORY_PER_ROW - 1)) /
		NUM_CATEGORY_PER_ROW;

	const onPress = () => props?.onPress?.(props?.data);

	return (
		<TouchableOpacity
			style={[
				styles.wrapper,
				{
					marginLeft: props.index ? MARGIN_CATEGORY_ITEM : 0,
					width: categoryWidth,
				},
			]}
			onPress={onPress}
		>
			<LinearGradient
				colors={
					props?.isPicked
						? ['rgba(138,50,169,1)', 'rgba(138,0,255,1)']
						: ['rgba(0,0,0,1)', 'rgba(0,0,0,1)']
				}
				useAngle
				angle={45}
				locations={[0, 0.6]}
				style={[styles.background]}
			>
				<TextCustom size="medium" style={styles.title}>
					{category?.name}
				</TextCustom>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default CategoryItem;

const styles = StyleSheet.create({
	wrapper: {
		borderColor: Colors.SECONDARY,
		borderRadius: 8,
		borderWidth: 1,
		height: 71,
		overflow: 'hidden',
	},
	background: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: { textAlign: 'center' },
});
