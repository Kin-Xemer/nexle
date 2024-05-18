import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/constants';

const styles = StyleSheet.create({
	fieldEmail: { marginTop: 41 },
	fieldPassword: { marginTop: 26 },
	checkboxContainer: {
		marginTop: 49,
		flexDirection: 'row',
		alignItems: 'center',
	},
	checkbox: { marginRight: 8 },
	termAndPolicy: { flex: 1, marginTop: 29 },
	button: {
		flex: 1,
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 54,
	},
	buttonDisabled: { opacity: 0.3 },
	borderArrow: {
		borderRadius: 27,
		width: 54,
		height: 54,
		borderWidth: 1,
		borderColor: Colors.PRIMARY,
		justifyContent: 'center',
		alignItems: 'center',
	},
	arrow: {
		height: 12,
		width: 21,
	},
});

export default styles;
