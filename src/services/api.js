import axios from 'axios';
import { getAccessToken, logout } from './authService';

const api = axios.create({
    baseURL: 'http://11b.pythonanywhere.com/api', // Your backend URL
});

api.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Optionally handle expired tokens and redirect to login if necessary
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            logout();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
