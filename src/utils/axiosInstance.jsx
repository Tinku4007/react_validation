// axiosInstance.js

import axios from "axios";
import { getLocalStorage } from "./LocalStorageUtills";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

// export const setAuthToken = () => {
//     const token = getLocalStorage('token');

//     if (token) {
//         axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//         delete axiosInstance.defaults.headers.common['Authorization'];
//     }
// };

export default axiosInstance;
