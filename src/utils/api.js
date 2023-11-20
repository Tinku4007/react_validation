import axiosInstance from "./axiosInstance";

export const LoginAdmin = async (payload) => {
    try {
        const response = await axiosInstance.post('/posts', payload)
        return response.data
    } catch (error) {
        return error.response
    }
};