import { GetAllOrderByBrand, GetAllOrderCountByBrand, GetOrderDetailById } from "../order-api";


export const useOrderCountByBrand = ({
    brandName,
    token
}: {
    brandName: string;
    token: string
}) => {
    const queryKey = ['order count', brandName];
    const queryFn = async () => {
        return GetAllOrderCountByBrand(brandName, token);
    }

    return { queryKey, queryFn };
}

export const useOrdersByBrand = ({
    page,
    eachPage,
    token
}: {
    page: number,
    eachPage: number,
    token: string
}) => {
    const queryKey = ['brand orders', page, eachPage];
    const queryFn = async () => {
        return GetAllOrderByBrand({
            page: page,
            eachPage: eachPage,
            token: token
        });
    }

    return { queryKey, queryFn };
}

export const useOrderDetail = ({
    orderId,
    token
}: {
    orderId: string,
    token: string
}) => {
    const queryKey = ['order detail', orderId];
    const queryFn = async () => {
        return GetOrderDetailById(orderId, token);
    }

    return { queryKey, queryFn };
}