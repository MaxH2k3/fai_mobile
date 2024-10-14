import { ProductStatus } from "../enum/product-enum";
import { IProductOwner } from "./user-interface";

export interface IProductMain {
    id: string;
    name: string;
    unitPrice: number;
    purchasePrice: number;
    status: string;
    createdAt: string;
    averageStar: number;
    image: string;
    description: string;
}

export interface IProductSearch {
    name: string;
    description: string;
    image: string;
}

export interface IProduct {
    id: string;
    name: string;
    unitPrice: number;
    purchasePrice: number;
    description: string;
    status: string;
    statistic: IStatistic;
    feedbacks: IFeedback[];
    images: IProductImage[]
    quantity: number;
    createdAt: string;
    category: ICategory;
    createdBy: IProductOwner;
    style: IStyle;
    tags: ITag[];
    color: string[];
    size: string[]
    gender: string;
}

export interface IProductImage {
    image: string;
    productId: string;
    orderNumber: 1;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ITag {
    id: number;
    name: string;
}

export interface IStyle {
    id: number;
    name: string;
}

export interface IColor {
    name: string;
    color: string;
}

export interface ISize {
    name: string;
}

export interface IGender {
    label: string;
    name: string;
}

export interface IStatistic {
    totalFeedback: number;
    averageStar: number;
    totalFbOneStar: number;
    totalFbTwoStar: number;
    totalFbThreeStar: number;
    totalFbFourStar: number;
    totalFbFiveStar: number;
}

export interface IFeedback {
    userId: string;
    productId: string;
    name: string;
    content: string;
    rating: number;
    createdAt: string;
    updatedAt: string;
}

export interface ICreateProductData {
    Name: string;
    UnitPrice: number;
    PurchasePrice: number;
    Description: string;
    Quantity: number;
    Status: string;
    CategoryId: number;
    Color: string[];
    Size: string[];
    Gender: string;
    TagIds: number[];
    Images: File[]
}