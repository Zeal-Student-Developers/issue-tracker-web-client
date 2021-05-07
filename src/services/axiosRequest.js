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
    return request;
};

createRequest();

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

export { createRequest as req, setJWTHeader };
