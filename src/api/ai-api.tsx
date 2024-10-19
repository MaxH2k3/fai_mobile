import axios from "axios";
import { tryOnOutfit } from "./api-config";

export const TryOnOutfit = async (data: FormData, token: string) => {

    try {
        const response = await axios.post(
            tryOnOutfit,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
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