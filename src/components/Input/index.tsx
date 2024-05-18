import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import {
	Animated,
	Easing,
	Image,
	StyleSheet,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { BLUR_VALUE, Colors, FOCUS_VALUE } from '../../utils/constants';
import TextCustom from '../TextCustom';
import image from '../../assets';

interface InputProps extends TextInputProps {
	title: string;
	color?: string;
	bottomLine?: React.ReactNode;
	isPasword?: boolean;
}

const Input = forwardRef((props: InputProps, ref: any) => {
	const [isPasswordHidden, setIsPasswordHidden] = useState(props.isPasword);
	const inputRef = useRef<any>(null);
	const animationValue = useRef(new Animated.Value(BLUR_VALUE));
	const labelOffset = useMemo(
		() =>
			animationValue.current.interpolate({
				inputRange: [BLUR_VALUE, FOCUS_VALUE],
				outputRange: [styles.inputWrapper.marginTop + 24, 0],
			}),
		[],
	);
	const borderColor = useMemo(
		() =>
			animationValue.current.interpolate({
				inputRange: [BLUR_VALUE, FOCUS_VALUE],
				outputRange: [Colors.SECONDARY, Colors.PRIMARY],
			}),
		[],
	);
	const handleInputPress = () => inputRef?.current?.focus?.();
	const handleFocus = (e: any) => {
		Animated.timing(animationValue.current, {
			toValue: FOCUS_VALUE,
			duration: 200,
			easing: Easing.ease,
			useNativeDriver: false,
		}).start();
		props?.onFocus?.(e);
	};
	const handleBlur = (e: any) => {
		if (props.value) {
			return;
		}
		Animated.timing(animationValue.current, {
			toValue: BLUR_VALUE,
			duration: 200,
			easing: Easing.ease,
			useNativeDriver: false,
		}).start();
		props?.onBlur?.(e);
	};
	useImperativeHandle(ref, () => inputRef.current);
	return (
		<TouchableWithoutFeedback onPress={handleInputPress}>
			<View>
				<Animated.View style={[{ transform: [{ translateY: labelOffset }] }]}>
					<TextCustom size="small" color={Colors.SECONDARY}>
						{props.title}
					</TextCustom>
				</Animated.View>

				<View style={styles.inputWrapper}>
					<TextInput
						ref={inputRef}
						{...props}
						autoCapitalize="none"
						secureTextEntry={isPasswordHidden}
						style={[styles.input, { color: Colors.TEXT_LIGHT }, props?.style]}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>

					{props?.isPasword && (
						<TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
							<Image style={styles.eye} source={image.icon.Eye} />
						</TouchableOpacity>
					)}
				</View>

				{props?.bottomLine ?? (
					<Animated.View style={[styles.bottomLine, { borderColor: borderColor }]} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
});

export default Input;

const styles = StyleSheet.create({
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 12,
	},
	input: {
		flex: 1,
		fontSize: 16,
		fontFamily: 'Lato Regular',
		padding: 0,
	},
	eye: {
		marginLeft: 8,
		width: 24,
		height: 24,
		resizeMode: 'contain',
	},
	bottomLine: {
		borderBottomWidth: 1,
	},
});
