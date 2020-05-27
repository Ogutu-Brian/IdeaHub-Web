const serviceName: string = 'authentication';

const signUp: string = `${serviceName}/sign-up`;
const verifyUser: string = `${serviceName}/verify`;
const loginUser: string = `${serviceName}/login`;
const logoutUser: string = `${serviceName}/logout`;
const refreshToken: string = `${serviceName}/refresh_token`;

export { signUp, verifyUser, loginUser, logoutUser, refreshToken };
