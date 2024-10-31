import { UserGender, UserRoleNumber, UserStatus } from "../enum/user-enum"

export interface IProductOwner {
    id: string;
    lastName: string;
    firstName: string;
    avatar: string;
    status: UserStatus;
}

export interface ILoginUserData {
    email: string;
    password: string;
}

export interface IGoogleLoginUserData {
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    gender: UserGender;
    accessToken: string;
}

export interface IRegisterUserData {
    roleName: string;
    gender: string;
    email: string;
    password: string;
    lastName: string;
    firstName: string;
}

export interface IVerifyUserData {
    email: string;
    otp: string;
}

export interface IResendOTPData {
    email: string;
}

export interface IForgotPasswordData {
    email: string;
}

export interface IResetPasswordData {
    email: string;
    otp: string;
    password: string;
}

export interface IUpdateUserData {
    firstName?: string;
    lastName?: string;
    phone?: string;
    roleName?: string;
    gender?: string;
    fileAvatar?: File
}

export interface ILoggedInUserData {
    avatar: string;
    roleName: string;
    lastName: string;
    firstName: string;
    gender: string;
    token: string;
    email: string
}

export interface IUserProfile {
    address: string;
    age: number;
    taxcode: string;
    avatar: string;
    createAt: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    id: string;
    phone: string;
    roleName: string;
    status: string;
}

export interface ICustomerProfileData {
    address: string;
    age: number;
}

export interface IBrandProfileData {
    address: string;
    taxcode: string;
}

export interface IUserProfileData {
    RoleName: UserRoleNumber;
    LastName: string;
    Phone: string;
    FileAvatar: File;
    FirstName: string;
    Gender: string;
}

export interface IUserBrand {
    brandId: string;
    lastName: string;
    firstName: string;
    avatar: string;
}

export interface IBrandProductCount {
    availableCount: number;
    unavailableCount: number;
}

export interface IBrandRevenue {
    date: string;
    value: number;
}