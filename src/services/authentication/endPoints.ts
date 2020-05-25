const baseUrl: string = 'http://159.89.233.98:8080';
const serviceName: string = 'authentication';

const signUp: string = `${baseUrl}/${serviceName}/sign-up`;
const verifyUser: string = `${baseUrl}/${serviceName}/verify`;
const loginUser: string = `${baseUrl}/${serviceName}/login`;
const logoutUser: string = `${baseUrl}/${serviceName}/logout`;
const refreshToken: string = `${baseUrl}/${serviceName}/refresh_token`;

export { signUp, verifyUser, loginUser, logoutUser, refreshToken };
