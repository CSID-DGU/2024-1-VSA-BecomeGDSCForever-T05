import axios from 'axios';


export const publicInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
    }
});

export default publicInstance;
