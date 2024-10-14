export interface IPaymentData {
    paymentMethod: string;
    description: string;
    details: IOrderItem[]
}

export interface IOrderItem {
    productId: string;
    quantity: number;
}

export interface ICheckOutData {
    paymentMethod: string;
    address: string;
    note: string;
    details: IOrderItem[];
    callbackUrl: string;
}