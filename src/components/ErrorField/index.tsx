import { StyleSheet, View } from 'react-native';
import TextCustom from '../TextCustom';
import { Colors, Level } from '../../utils/constants';
import { getLevelEvaluate } from '../../utils/evaluatePassword';
import { SignupFormErrProps } from '../../types';

interface passwordFormProps {
	signupErrForm: SignupFormErrProps;
	field: string;
	level?: Level;
}
const ErrorField = ({ signupErrForm, field, level }: passwordFormProps) => {
	const { color } = getLevelEvaluate(level);
	return (
		<View style={styles.container}>
			{field === 'email' ? (
				<View>
					<TextCustom size="small" color={Colors.ERROR}>
						{signupErrForm?.emailError ?? ''}
					</TextCustom>
				</View>
			) : (
				<View style={styles.passwordStyle}>
					<TextCustom size="small" color={Colors.ERROR}>
						{signupErrForm?.passwordError ?? ''}
					</TextCustom>
					<TextCustom size="small" color={color}>
						{level}
					</TextCustom>
				</View>
			)}
		</View>
	);
};

export default ErrorField;
const styles = StyleSheet.create({
	container: {
		marginTop: 14,
		justifyContent: 'space-between',
	},
	passwordStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
