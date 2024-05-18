import React from 'react';
import { StyleSheet, Text, TextInputProps } from 'react-native';
import { Colors } from '../../utils/constants';

interface TextProps extends TextInputProps {
	size?: 'small' | 'medium' | 'large' | 'xlarge';
	color?: string;
}

const TextCustom: React.FC<TextProps> = props => {
	return (
		<Text
			{...props}
			style={[
				styles[props.size || 'medium'],
				{ color: props?.color || Colors.TEXT_LIGHT },
				props.style,
			]}
		>
			{props?.children}
		</Text>
	);
};
export default TextCustom;

const styles = StyleSheet.create({
	small: {
		fontFamily: 'Lato Medium',
		fontSize: 12,
	},

	medium: {
		fontFamily: 'Lato Regular',
		fontSize: 14,
	},

	large: {
		fontFamily: 'Lato Regular',
		fontSize: 16,
	},
	xlarge: {
		fontFamily: 'Lato Regular',
		fontSize: 22,
	},
});
