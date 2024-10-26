import axios from "axios";
import { createFeedback, getFeedbackByProduct } from "./api-config";
import { ICreateFeedbackData } from "../constants/model/feedback-interface";

export const GetFeedbacksByProduct = async ({
    productId,
    page,
    eachPage,
}: {
    productId: string;
    page: number;
    eachPage: number;
}) => {
    try {
        const response = await axios.get(`${getFeedbackByProduct}/${productId}`, { params: { page, eachPage } });
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

export const CreateFeedback = async (data: ICreateFeedbackData, token: string) => {

    try {
        const response = await axios.post(createFeedback,
            {
                productId: data.productId,
                content: data.content,
                rating: data.rating
            },
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
