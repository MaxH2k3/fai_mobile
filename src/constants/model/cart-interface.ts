export interface ICartItem {
    id: string;
    name: string,
    color: string,
    size: string,
    quantity: number,
    price: number,
    image: string
}

export interface IWishlistItem {
    id: string;
    name: string;
    unitPrice: number;
    purchasePrice: number;
    image: string;
    rating: number;
}