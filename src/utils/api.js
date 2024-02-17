import axiosInstance from "./axiosInstance";

export const LoginAdmin = async (payload) => {
    try {
        const response = await axiosInstance.post('/posts', payload)
        return response.data
    } catch (error) {
        return error.response
    }
};


export const ClientAdmin = async () => {
    try {
        const response = await axiosInstance.get("/Client")
        return response.data
    } catch (error) {
        return error.response
    }
}

export const ServiceProviderAdmin = async () => {
    try {
        const response = await axiosInstance.get("/serviceProvider")
        return response.data
    } catch (error) {
        return error.response
    }
}

export const ServiceProviderAdminDelete = async (id) => {
    try {
        const response = await axiosInstance.delete(`/serviceProvider/${id}`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const RequstedAdminApi = async () => {
    try {
        const response = await axiosInstance.get("/requsted")
        return response.data
    } catch (error) {
        return error.response
    }
}

export const supportTicketAdminApi = async () => {
    try {
        const response = await axiosInstance.get('/supportTicket')
        return response.data
    } catch (error) {
        return error.response
    }
}

export const SearchListAdminApi = async () => {
    try {
        const response = await axiosInstance.get('/searchList')
        return response.data
    } catch (error) {
        return error.response
    }
}