import { req, setJWTHeader } from './axiosRequest';
import jwtDecode from 'jwt-decode';
import apiConstants from './apiConstants';

const request = req();

/**
 * Service method to login to the remote server
 * @param {String} username
 * @param {String} password
 * @returns boolean
 */
const login = async (username, password) => {
    setJWTHeader(request);
    try {
        const res = await request.post(apiConstants.API_LOGIN, {
            userId: username,
            password: password
        });

        if (res && res.status === 200 && res.data) {
            //Check if user is Auth_level_3
            const decoded = jwtDecode(res.data.token);

            if (decoded.role === 'auth_level_three') {
                localStorage.setItem('jwt', res.data.token);
                localStorage.setItem('refresh', res.data.refreshToken);
                return true;
            } else return false;
        }
    } catch (e) {
        return false;
    }
};

/**
 * Service method that logs out the current user.
 */
const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('refresh');
};

export const authService = {
    login,
    logout
};
