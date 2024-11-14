import axios from 'axios';

const API_URL = 'http://11b.pythonanywhere.com/api'; // Update with your backend URL if needed

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login/`, { username, password });

    // Store tokens in localStorage (or sessionStorage if preferred)
    if (response.data.access) {
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
    }

    return response.data;
};

export const logout = () => {
    // Remove tokens from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};
