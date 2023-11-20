import axios from "axios";

    let token = null

const axiosInstance = axios.create({
    baseURL : 'http://localhost:3000',
    headers : {
        Authorization : `Bearer ${token}`,
    }
})

export default axiosInstance;