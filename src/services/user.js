import { req, setJWTHeader } from './axiosRequest';
import apiConstants from './apiConstants';

const request = req();

/**
 * Gets the details of currently logged in user
 * @returns {Object}
 * Object = {success: boolean, res?: Object}
 */
const getCurrentUserDetails = async () => {
    try {
        setJWTHeader(request);
        const res = await request.get(apiConstants.API_GET_CURRENT_USER);
        if (res && res.status === 200 && res.data) return { success: true, res: res.data };
        else return { success: false };
    } catch (e) {
        return { success: false };
    }
};

export { getCurrentUserDetails };
