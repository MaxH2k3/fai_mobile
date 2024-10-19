import { ICheckOutData, IPaymentData } from "@/shared/model/payment-interface";
import axios from "axios";
import { authApiConfig, checkOut, createPayment } from "./api-config";

export const CreatePayment = async (data: IPaymentData) => {

    const config = authApiConfig();

    if (!config) {
        return;
    }

    try {
        const response = await axios.post(createPayment, {
            paymentMethod: data.paymentMethod,
            description: data.description,
            details: data.details,
        }, config);
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

export const CheckOut = async (data: ICheckOutData) => {

    const config = authApiConfig();

    if (!config) {
        return;
    }

    try {
        const response = await axios.post(checkOut, {
            paymentMethod: data.paymentMethod,
            address: data.address,
            note: data.note,
            details: data.details,
            callbackUrl: data.callbackUrl,
        }, config);
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