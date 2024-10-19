import axios from "axios";
import { authApiConfig, createProduct, createQueryString, getAllProduct, getHighestProductPrice, getProductBestSeller, getProductByName, getProductNames, getProductTopReview, getSimilarProduct, searchProduct, searchProductByName } from "./api-config";

export const GetAllProduct = async ({
    page,
    eachPage,
}: {
    page: number;
    eachPage: number;
}) => {
    try {
        const response = await axios.get(getAllProduct, { params: { page, eachPage } });
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

export const GetSimilarProduct = async ({
    productName,
    CategoryName,
    TagNames,
    Page,
    EachPage
}: {
    productName: string;
    CategoryName: string;
    TagNames?: string[];
    Page: number;
    EachPage: number
}) => {
    try {
        const response = await axios.get(getSimilarProduct, { params: { productName, CategoryName, TagNames, Page, EachPage } });

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

export const SearchProduct = async (params: {
    SearchTerm?: string;
    MinPrice?: number;
    MaxPrice?: number;
    Colors?: string[];
    Sizes?: string[];
    Gender?: string;
    Status?: string[];
    MinDate?: string;
    MaxDate?: string;
    Categories?: string[];
    Tags?: string[];
    SortBy?: string;
    IsAscending?: boolean;
    Page: number;
    EachPage: number;
}) => {
    try {
        const queryString = createQueryString(params);
        const response = await axios.get(`${searchProduct}?${queryString}`);
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

export const SearchProductByName = async (params: {
    SearchTerm: string;
    ProductCount: number;
}) => {
    try {
        const queryString = createQueryString(params);
        const response = await axios.get(`${searchProductByName}?${queryString}`);

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

export const GetProductByName = async (name: string) => {
    try {
        const response = await axios.get(`${getProductByName}/${name}`,);
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

export const GetAllProductName = async () => {
    try {
        const response = await axios.get(`${getProductNames}`);
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

export const CreateProduct = async (data: FormData) => {

    const config = authApiConfig();

    if (!config) {
        return;
    }

    try {
        const response = await axios.post(
            createProduct,
            data,
            {
                headers: {
                    ...config.headers,
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

export const GetProductRecommend = async (params: {
    page: number;
    eachPage: number;
}) => {
    try {
        const queryString = createQueryString(params);
        const response = await axios.get(`${searchProduct}?${queryString}`);
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

export const GetProductBestSeller = async (params: {
    ProductCount: number;
}) => {
    try {
        const queryString = createQueryString(params);
        const response = await axios.get(`${getProductBestSeller}?${queryString}`);
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

export const GetProductTopReview = async (params: {
    ProductCount: number;
}) => {
    try {
        const queryString = createQueryString(params);
        const response = await axios.get(`${getProductTopReview}?${queryString}`);
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


export const GetProductHighestPrice = async () => {
    try {
        const response = await axios.get(`${getHighestProductPrice}`);
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