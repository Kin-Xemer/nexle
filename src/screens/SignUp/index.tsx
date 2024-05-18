import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StatusBar, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Images from '../../assets';
import Background from '../../components/Background';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import Screen from '../../components/Screen';
import ButtonBack from '../../components/Screen/ButtonBack';
import Header from '../../components/Screen/Header';
import { signUpAndSignIn } from '../../redux/auth/actions';
import { useAppDispatch } from '../../redux/store';
import { FetchStatus, SignupFormProps, SignupFormErrProps } from '../../types';
import styles from './styles';
import useForm from './useForm';
import { Colors, PASSWORD_MAX_LENGTH } from '../../utils/constants';
import TextCustom from '../../components/TextCustom';
import { evaluatePassword } from '../../utils/evaluatePassword';
import PasswordLevelLine from '../../components/PaswordLevelLine';
import ErrorField from '../../components/ErrorField';
import image from '../../assets';
import { validateField } from '../../utils/validate';
const { width, height } = Dimensions.get('window');
const SignInScreen = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<any>();
	const [status, setStatus] = useState<FetchStatus>('new');
	const [checkBox, setCheckBox] = useState(false);
	const [isError, setIsError] = useState<boolean>(true);
	const [signupForm, setSignupForm] = useState<SignupFormProps>({
		email: '',
		password: '',
	});
	const [signupErrForm, setSignupErrForm] = useState<SignupFormErrProps>({
		emailError: 'The email is required',
		passwordError: 'The password is required',
	});

	const refPassword = useRef(null);
	const refScreen = useRef(null);

	const onPressSignUp = async () => {
		try {
			setStatus('loading');
			setStatus('loading');
			await dispatch(signUpAndSignIn(signupForm)).unwrap();
			navigation.navigate('Category');
			Toast.show({
				text1: 'Done!',
				text2: 'Sign in success!',
			});
			setStatus('success');
		} catch (error) {
			Toast.show({
				type: 'error',
				text1: 'Failed!',
				text2: 'Something went wrong!',
			});
			setStatus('error');
		}
	};

	useEffect(() => {
		setIsError(signupErrForm?.emailError !== '' || signupErrForm?.passwordError !== '');
	}, [signupForm]);signupErrForm;

	const handleOnchange = (field: string, value: string) => {
		setSignupForm((oldValue: SignupFormProps) => ({
			...oldValue,
			[field]: value,
		}));
    setSignupErrForm((oldValue: SignupFormErrProps) => ({
			...oldValue,
			[`${field}Error`]: validateField(field, value),
		}));  
	};
	return (
		<>
			<StatusBar barStyle="light-content" />

			<Background source={image.background.LogIn} />

			<Screen ref={refScreen}>
				<View style={{ marginTop: height * 0.4 }} />

				<View>
					<TextCustom size="xlarge">Let's get you started!</TextCustom>

					<View style={styles.fieldEmail}>
						<Input
							title="Your email"
							value={signupForm?.email}
							onChangeText={value => {
								handleOnchange('email', value);
							}}
						/>

						<ErrorField signupErrForm={signupErrForm} field="email" />
					</View>

					<View style={styles.fieldPassword}>
						<Input
							ref={refPassword}
							isPasword
							style={{ color: Colors.TEXT_LIGHT }}
							title="Your password"
							value={signupForm?.password}
							onChangeText={value => {
								handleOnchange('password', value);
							}}
							bottomLine={
								signupForm?.password ? (
									<PasswordLevelLine level={evaluatePassword(signupForm?.password)} />
								) : undefined
							}
							maxLength={PASSWORD_MAX_LENGTH}
						/>

						<ErrorField
							signupErrForm={signupErrForm}
							field="password"
							level={evaluatePassword(signupForm?.password)}
						/>
					</View>

					{/* <View ref={refBottomForm} /> */}

					<View style={styles.checkboxContainer}>
						<TouchableOpacity onPress={() => setCheckBox(!checkBox)} style={styles.checkbox}>
							<Image
								style={styles.checkbox}
								source={checkBox ? image.icon.CheckedBox : image.icon.UncheckedBox}
							/>
						</TouchableOpacity>
						<TextCustom size="medium">I am over 16 years of age</TextCustom>
					</View>

					<View style={styles.termAndPolicy}>
						<TextCustom size="small">
							{`By clicking Sign Up, you are indicating that you have read and agree to the `}
							<TextCustom size="small" color={Colors.PRIMARY}>
								Terms of Service
							</TextCustom>
							{' and '}
							<TextCustom size="small" color={Colors.PRIMARY}>
								Privacy Policy
							</TextCustom>
						</TextCustom>
					</View>

					<TouchableOpacity
						style={[styles.button, isError ? styles.buttonDisabled : {}]}
						onPress={onPressSignUp}
						disabled={isError}
					>
						<TextCustom size="large">Sign Up</TextCustom>
						<View style={styles.borderArrow}>
							<Image source={image.icon.ArrowRight} style={styles.arrow} />
						</View>
					</TouchableOpacity>
				</View>
			</Screen>

			{status === 'loading' && <Loading />}

			<Header>
				<ButtonBack />
			</Header>
		</>
	);
};

export default SignInScreen;
