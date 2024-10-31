import { PaymentMethod } from "../enum/payment-enum";

export interface IOrder {
    id: string;
    totalPrice: number;
    address: string;
    createdAt: string;
    orderStatusId: number;
    paymentMethod: PaymentMethod;
    nameReceiver: string;
    note: string;
    customer: IOrderUser;
    discount: number;
}

export interface IOrderUser {
    id: string
    lastName: string
    firstName: string
}

export interface IOrderDetail {
    id: number;
    quantity: number
    price: number
    color: string
    size: string
    product: IOrderProduct
    createdBy: IOrderDetailUser
}

export interface IOrderProduct {
    id: string
    name: string
    image: string
}

export interface IOrderDetailUser {
    id: string
    lastName: string
    firstName: string
    avatar: string
}

export interface IChangeOrderStatus {
    orderId: string
    status: string
    note: string
}