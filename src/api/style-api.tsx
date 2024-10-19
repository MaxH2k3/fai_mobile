import axios from "axios";
import { getAllStyles } from "./api-config";

export const GetAllStyles = async ({
    page,
    eachPage,
}: {
    page: number;
    eachPage: number;
}) => {
    try {
        const response = await axios.get(`${getAllStyles}`, { params: { page, eachPage } });
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