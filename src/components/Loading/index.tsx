import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../../utils/constants';

const Loading = () => {
	return (
		<View style={[StyleSheet.absoluteFill, styles.wrapper]}>
			<ActivityIndicator color={Colors.PRIMARY} size="large" />
		</View>
	);
};

export default Loading;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: Colors.SECONDARY,
		opacity: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
