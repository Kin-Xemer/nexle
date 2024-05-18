/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles as screenStyles } from '../../../components/Screen';
import { Colors, MARGIN_CATEGORY_ITEM, NUM_CATEGORY_PER_ROW } from '../../../utils/constants';
import TextCustom from '../../../components/TextCustom';
import {  CategoryItemProps } from '../../../types';




const CategoryItem = ({ data, index, onPress, isPicked }: CategoryItemProps) => {
	const dimension = useWindowDimensions();
	const categoryWidth =
		(dimension.width -
			screenStyles.linear.paddingHorizontal * 2 -
			MARGIN_CATEGORY_ITEM * (NUM_CATEGORY_PER_ROW - 1)) /
		NUM_CATEGORY_PER_ROW;

	const handlePress = () => onPress?.(data);

	return (
		<TouchableOpacity
			style={[
				styles.wrapper,
				{
					marginLeft: index ? MARGIN_CATEGORY_ITEM : 0,
					width: categoryWidth,
				},
			]}
			onPress={handlePress}
		>
			<LinearGradient
				colors={
					isPicked
						? ['rgba(138,50,169,1)', 'rgba(138,0,255,1)']
						: ['rgba(0,0,0,1)', 'rgba(0,0,0,1)']
				}
				useAngle
				angle={45}
				locations={[0, 0.6]}
				style={styles.background}
			>
				<TextCustom size="medium" style={styles.title}>
					{data?.name}
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
