import axios from 'axios';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken');

export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    withCredentials: true,
    headers: {
        'Authorization': `Bearer ${accessToken}`,
    },
});

instance.interceptors.request.use((config) => {
        const accessToken = Cookies.get('accessToken');

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            config.withCredentials = true;
        }

        return config;

    }, (error) => {
        return Promise.reject(error);
    }
);