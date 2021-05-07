import axios from 'axios';
import apiConstants from './apiConstants';

/**
 * Helper method to return an axios.instance
 * @returns an instance of axios class with default config set
 */
const createRequest = () => {
    const request = axios.create({
        baseURL: apiConstants.API_BASE_URL,
        headers: {
            'Content-type': 'application/json'
        }
    });
    addRefreshTokenInterceptor(request);
    return request;
};

/**
 * Sets the current user's jwt to the header.
 * Needs to be called before every api call thats being made.
 * @param {Axios.Instance} request
 */
const setJWTHeader = (request) => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        request.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    } else {
        delete request.defaults.headers.common['Authorization'];
    }
};

/**
 * Helper function that refreshes and sets the JWT token
 * @param {Axios.Instance} request
 */

const addRefreshTokenInterceptor = (request) => {
    request.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalReq = error.config;
            // Stop the loop
            console.log(originalReq.url);
            if (
                error.response.status === 401 &&
                originalReq.url === apiConstants.API_REFRESH_TOKEN
            ) {
                //window.location.href = '/login';
                console.log('Reached');
                return Promise.reject(error);
            }

            if (
                error.response.data.code === 'BAD_REQUEST' &&
                error.response.data.message === 'jwt expired' &&
                error.response.status === 401 &&
                error.response.statusText === 'Unauthorized'
            ) {
                console.log('I was called');
                const refresh_token = localStorage.getItem('refresh');

                if (refresh_token) {
                    try {
                        const res = await request.post(apiConstants.API_REFRESH_TOKEN, {
                            refreshToken: refresh_token
                        });

                        if (res && res.data && res.data.token) {
                            localStorage.setItem('jwt', res.data.token);
                            setJWTHeader(request);
                            return request(originalReq);
                        }
                    } catch (e) {
                        console.log(e);
                        return Promise.reject(e);
                    }
                }

                return Promise.reject(error);
            }
        }
    );
};

createRequest();

export { createRequest as req, setJWTHeader };
