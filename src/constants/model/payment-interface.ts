export interface IPaymentData {
    paymentMethod: string;
    description: string;
    details: IOrderItem[]
    discount: number
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
    voucherCode?: string;
}

export interface IPaymentStorage {
    address: string
    note: string
    voucherCode?: string
}
