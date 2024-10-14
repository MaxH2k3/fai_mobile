import { PaymentMethod } from "../enum/payment-enum";

export interface IOrder {
    id: string;
    totalPrice: number;
    address: string;
    createAt: string;
    orderStatusId: number;
    paymentMethod: PaymentMethod;
    nameReceiver: string;
    customer: IOrderUser;
    discount: number;
}

export interface IOrderUser {
    id: string
    lastName: string
    firstName: string
}