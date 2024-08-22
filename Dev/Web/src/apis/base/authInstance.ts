import axios from 'axios';
import Cookies from 'js-cookie';

// const accessToken = Cookies.get('access_token');

const accessToken = "eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhaWQiOiJlZGY1NzE5Yi1mMTk5LTRlMjUtYTA2Ny1jM2Y5NWI2NTZjOWYiLCJyb2wiOiJVU0VSIiwiaWF0IjoxNzI0MzI2MzU2LCJleHAiOjE3MjU1MzU5NTZ9.dI9SI3hr1NYi9TVcPsNMIAe_nTdVyMpxbBwDQRM7pt0vSHQrzFIJYU4v6kTVzxHRLQnB8a7FIfr9FVOKP0AXsw";

//const accessToken = "eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhaWQiOiIyODZjZjM0NC1lODhiLTQ3MDAtOTRjNC1hMGU2NWVhNjdiMWMiLCJyb2wiOiJVU0VSIiwiaWF0IjoxNzI0MzI2NzExLCJleHAiOjE3MjU1MzYzMTF9.FhDhjzzdc25W1ZJjAhz3T1Pt5qGlfzrj5AwNwNSqRDDPx3-ZfgGMJYVvrwgrZz8lJ9_HIiCJnu0GBdemyK2gPw";

// const accessToken = "eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhaWQiOiI4ZDdhYmRjZi0wYzhkLTQ5ZTEtOTgyMi1iMTQ1ZmRjZGQwNzgiLCJyb2wiOiJVU0VSIiwiaWF0IjoxNzI0MzMyMjMzLCJleHAiOjE3MjU1NDE4MzN9.T13GuE-lNPxIBdNDmv9-5od3Dw6oFebWp7q6bH6JOSk5Y1lIajlP0MQIJEWIJ579wCUp5Et_7k2Jqe0mM1bvFg";

export const authInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    withCredentials: true,
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`,
    },
});

authInstance.interceptors.request.use((config) => {
        const accessToken = Cookies.get('access_token');

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            config.withCredentials = true;
        }

        return config;

    }, (error) => {
        return Promise.reject(error);
    }
);

authInstance.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response && error.response.status === 401 && error.response.data.error.code === "40101") {
            const originalRequest = error.config;
            if (!originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    // 토큰 재발급 요청
                    const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/auth/reissue/token`, {}, {
                        withCredentials: true,
                    });

                    if (response.status === 200) {
                        const accessToken = Cookies.get('access_token');
                        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                        return authInstance(originalRequest);
                    }
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default authInstance;
