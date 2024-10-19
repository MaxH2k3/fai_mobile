import { GetBrandRevenueStatistic, GetBrandReviewStatistics, GetBrandReviewStatisticsWithDate, GetBrandTotalProductCount, GetBrandTotalProductSold, GetBrandTotalRevenue, GetTopBrands, GetUserProfile } from "../user-api";

export const useUserTopBrandQuery = ({
    brandCount
}: {
    brandCount: number;
}) => {
    const queryKey = ['top brand', brandCount];
    const queryFn = async () => {
        return GetTopBrands({ brandCount: brandCount });
    }

    return { queryKey, queryFn };
}


export const useBrandTotalRevenue = ({
    brandName
}: {
    brandName: string;
}) => {
    const queryKey = ['total revenue', brandName];
    const queryFn = async () => {
        return GetBrandTotalRevenue(brandName);
    }

    return { queryKey, queryFn };
}

export const useBrandRevenueStatistic = ({
    brandName,
    option
}: {
    brandName: string;
    option: string
}) => {
    const queryKey = ['revenue stats', brandName, option];
    const queryFn = async () => {
        return GetBrandRevenueStatistic({
            brandName: brandName,
            option: option
        });
    }

    return { queryKey, queryFn };
}


export const useBrandTotalProductSold = ({
    brandName
}: {
    brandName: string;
}) => {
    const queryKey = ['products sold', brandName];
    const queryFn = async () => {
        return GetBrandTotalProductSold(brandName);
    }

    return { queryKey, queryFn };
}

export const useBrandTotalProductCount = ({
    brandName
}: {
    brandName: string;
}) => {
    const queryKey = ['product counts', brandName];
    const queryFn = async () => {
        return GetBrandTotalProductCount(brandName);
    }

    return { queryKey, queryFn };
}

export const useBrandReviewStatistics = ({
    brandName
}: {
    brandName: string;
}) => {
    const queryKey = ['review stats', brandName];
    const queryFn = async () => {
        return GetBrandReviewStatistics(brandName);
    }

    return { queryKey, queryFn };
}

export const useBrandReviewStatisticsWithDate = ({
    brandName,
    option
}: {
    brandName: string;
    option: string;
}) => {
    const queryKey = ['dated review stats', brandName, option];
    const queryFn = async () => {
        return GetBrandReviewStatisticsWithDate({
            brandName: brandName,
            option: option
        });
    }

    return { queryKey, queryFn };
}

export const useUserProfile = ({
    key
}: {
    key: string;
}) => {
    const queryKey = ['user profile', key];
    const queryFn = async () => {
        return GetUserProfile(key);
    }

    return { queryKey, queryFn };
}