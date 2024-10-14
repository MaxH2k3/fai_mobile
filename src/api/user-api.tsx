import axios from "axios"
import { authApiConfig, createBrandProfile, createCustomerProfile, createQueryString, forgotPassword, getBrandRevenueStatistics, getBrandReviewStatistics, getBrandReviewStatisticsWithDate, getBrandTotalProductCount, getBrandTotalProductSold, getBrandTotalRevenue, getTopBrands, getUserProfile, googleLogin, login, logout, register, resendOTP, resetPassword, updateUserProfile, verify } from "./api-config"
import { IBrandProfileData, ICustomerProfileData, IForgotPasswordData, IGoogleLoginUserData, ILoginUserData, IRegisterUserData, IResendOTPData, IResetPasswordData, IVerifyUserData } from "../constants/model/user-interface";

export const EmailPasswordSignin = async (data: ILoginUserData) => {
    try {
        const response = await axios.post(login, {
            email: data.email,
            password: data.password
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

export const GoogleSignin = async (data: IGoogleLoginUserData) => {
    try {
        const response = await axios.post(googleLogin, {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            avatar: data.avatar,
            gender: data.gender,
            accessToken: data.accessToken,
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

export const Register = async (data: IRegisterUserData) => {
    try {
        const response = await axios.post(register, {
            roleId: data.roleId,
            email: data.email,
            password: data.password,
            lastName: data.lastName,
            firstName: data.firstName,
            gender: data.gender
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
};

export const Verify = async (data: IVerifyUserData) => {
    try {
        const response = await axios.post(verify, {
            email: data.email,
            otp: data.otp
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

export const Logout = async () => {
    const config = authApiConfig();

    if (!config) {
        return;
    }

    try {
        const response = await axios.post(logout, {}, config);
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

export const Resend = async (data: IResendOTPData) => {

    try {
        const response = await axios.post(resendOTP, {
            email: data.email
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

export const ForgotPassword = async (data: IForgotPasswordData) => {

    try {
        const response = await axios.post(forgotPassword, {
            email: data.email
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

export const ResetPassword = async (data: IResetPasswordData) => {

    try {
        const response = await axios.post(resetPassword, {
            email: data.email,
            otp: data.otp,
            password: data.password
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

export const CreateCustomerProfile = async (data: ICustomerProfileData) => {

    const config = authApiConfig();

    if (!config) {
        return;
    }

    try {
        const response = await axios.put(
            createCustomerProfile,
            {
                address: data.address,
                age: data.age
            },
            config);
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

export const CreateBrandProfile = async (data: IBrandProfileData) => {

    const config = authApiConfig();

    if (!config) {
        return;
    }

    try {
        const response = await axios.put(
            createBrandProfile,
            {
                address: data.address,
                taxCode: data.taxcode
            },
            config);
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

export const UpdateUserProfile = async (data: FormData) => {

    const config = authApiConfig();

    if (!config) {
        return;
    }

    try {
        const response = await axios.put(
            updateUserProfile,
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

export const GetTopBrands = async (params: {
    brandCount: number;
}) => {
    try {
        const queryString = createQueryString(params);
        const response = await axios.get(`${getTopBrands}?${queryString}`);
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

export const GetUserProfile = async (key: string) => {
    try {
        const response = await axios.get(`${getUserProfile}/${key}`);
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

export const GetBrandTotalRevenue = async (brandName: string) => {
    try {
        const response = await axios.get(`${getBrandTotalRevenue}?BrandName=${brandName}`);
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

export const GetBrandRevenueStatistic = async ({
    brandName,
    option
}: {
    brandName: string;
    option: string;
}) => {
    try {
        const response = await axios.get(`${getBrandRevenueStatistics}?BrandName=${brandName}&Option=${option}`);
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

export const GetBrandTotalProductSold = async (brandName: string) => {
    try {
        const response = await axios.get(`${getBrandTotalProductSold}?BrandName=${brandName}`);
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

export const GetBrandTotalProductCount = async (brandName: string) => {
    try {
        const response = await axios.get(`${getBrandTotalProductCount}?BrandName=${brandName}`);
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

export const GetBrandReviewStatistics = async (brandName: string) => {
    try {
        const response = await axios.get(`${getBrandReviewStatistics}?BrandName=${brandName}`);
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

export const GetBrandReviewStatisticsWithDate = async ({
    brandName,
    option
}: {
    brandName: string;
    option: string;
}) => {
    try {
        const response = await axios.get(`${getBrandReviewStatisticsWithDate}?BrandName=${brandName}&Option=${option}`);
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

