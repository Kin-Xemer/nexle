export type FetchStatus = 'success' | 'error' | 'loading' | 'new';
export type ListState<I> = {
  data: I[];
  status: FetchStatus;
  message: string;
};
export interface SignupFormProps {
	email: string;
	password: string;
}
export interface SignupFormErrProps {
	emailError: string;
	passwordError: string;
}
export type SignupOpts =
	 Partial<{
			firstName: string;
			lastName: string;
	  }>
	| undefined;

export type InitState = {
	user?: User;
	accessToken: string;
	refreshToken: string;
};
export interface SignInPayload {
	email: string;
	password: string;
};
export interface User {
	id: number;
	createdAt: string;
	updatedAt: string;
	email: string;
	firstName: string;
	lastName: string;
	role: string;
}
export interface SigninResponse {
	user: User;
	accessToken: string;
	refreshToken: string;
};