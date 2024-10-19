import axios from "axios";
import { getAllOrderCountByBrand, getAllOrdersByBrand, getOrderDetailById } from "./api-config";


export const GetAllOrderCountByBrand = async (brandName: string, token: string) => {

    try {
        const response = await axios.get(
            `${getAllOrderCountByBrand}?brandName=${brandName}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        return {
            success: true,
            status: response.status,
            data: response.data
        };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return {
                success: false,
                status: error.response.status,
                message: error.response.data.message || 'An error occurred',
                data: error.response.data
            };
        } else {
            return {
                success: false,
                status: 500,
                message: 'An unexpected error occurred',
                data: null
            };
        }
    }
}

export const GetAllOrderByBrand = async ({
    page,
    eachPage,
    token
}: {
    page: number;
    eachPage: number;
    token: string
}) => {

    try {
        const response = await axios.get(`${getAllOrdersByBrand}?page=${page}&eachPage=${eachPage}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const paginationHeader = response.headers['x-pagination'];
        const metadata = JSON.parse(paginationHeader || '{}');
        return {
            success: true,
            status: response.status,
            data: {
                data: response.data,
                currentPage: metadata.CurrentPage,
                eachPage: metadata.EachPage,
                totalElements: metadata.TotalItems,
                totalPage: metadata.TotalPages
            }
        };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return {
                success: false,
                status: error.response.status,
                message: error.response.data.message || 'An error occurred',
                data: error.response.data
            };
        } else {
            return {
                success: false,
                status: 500,
                message: 'An unexpected error occurred',
                data: null
            };
        }
    }
}

export const GetOrderDetailById = async (orderId: string, token: string) => {


    try {
        const response = await axios.get(`${getOrderDetailById}/${orderId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return {
            success: true,
            status: response.status,
            data: response.data
        };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return {
                success: false,
                status: error.response.status,
                message: error.response.data.message || 'An error occurred',
                data: error.response.data
            };
        } else {
            return {
                success: false,
                status: 500,
                message: 'An unexpected error occurred',
                data: null
            };
        }
    }
}
