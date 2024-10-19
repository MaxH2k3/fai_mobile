import { ProductAPIEnum } from "../../constants/enum/product-enum";
import { GetProductBestSeller, GetProductByName, GetProductHighestPrice, GetProductRecommend, GetProductTopReview, GetSimilarProduct, SearchProduct, SearchProductByName } from "../product-api";


export const useProductsQuery = ({
    SearchTerm,
    MinPrice,
    MaxPrice,
    Colors,
    Sizes,
    Gender,
    Status,
    MinDate,
    MaxDate,
    Categories,
    Tags,
    SortBy,
    IsAscending,
    Page,
    EachPage
}: {
    SearchTerm?: string;
    MinPrice?: number;
    MaxPrice?: number;
    Colors?: string[];
    Sizes?: string[];
    Gender?: string;
    Status?: string[]
    MinDate?: string;
    MaxDate?: string;
    Categories?: string[]
    Tags?: string[]
    SortBy?: string;
    IsAscending?: boolean;
    Page: number;
    EachPage: number;
}) => {
    const queryKey = ['products',
        SearchTerm,
        MinPrice,
        MaxPrice,
        Colors,
        Sizes,
        Gender,
        Status,
        MinDate,
        MaxDate,
        Categories,
        Tags,
        SortBy,
        IsAscending,
        Page,
        EachPage
    ];
    const queryFn = async () => {
        return SearchProduct({
            SearchTerm: SearchTerm ?? undefined,
            MinPrice: MinPrice ?? undefined,
            MaxPrice: MaxPrice ?? undefined,
            Colors: Colors ?? undefined,
            Sizes: Sizes ?? undefined,
            Gender: Gender ?? undefined,
            Status: Status ?? undefined,
            MinDate: MinDate ?? undefined,
            MaxDate: MaxDate ?? undefined,
            Categories: Categories ?? undefined,
            Tags: Tags ?? undefined,
            SortBy: SortBy ?? undefined,
            IsAscending: IsAscending ?? undefined,
            Page: Page ?? 1,
            EachPage: EachPage ?? ProductAPIEnum.ITEM_PER_PAGE,
        });
    };

    return { queryKey, queryFn };
};

export const useProductQuery = ({
    name
}: {
    name: string
}) => {
    const queryKey = ['product', name];
    const queryFn = async () => {
        return GetProductByName(
            name
        );
    };

    return { queryKey, queryFn };
};

export const useSearchProductQuery = ({
    SearchTerm,
    ProductCount
}: {
    SearchTerm: string;
    ProductCount: number;
}) => {
    const queryKey = ['search product', SearchTerm, ProductCount];
    const queryFn = async () => {
        return SearchProductByName({
            SearchTerm: SearchTerm,
            ProductCount: ProductCount
        });
    };

    return { queryKey, queryFn };
};

export const useProductRecommendQuery = ({
    page,
    eachPage
}: {
    page: number;
    eachPage: number;
}) => {
    const queryKey = ['product recommend', page, eachPage];
    const queryFn = async () => {
        return GetProductRecommend({
            page: page,
            eachPage: eachPage
        });
    };

    return { queryKey, queryFn };
}

export const useProductBestSellerQuery = ({
    productCount
}: {
    productCount: number;
}) => {
    const queryKey = ['product best seller', productCount];
    const queryFn = async () => {
        return GetProductBestSeller({ ProductCount: productCount });
    };

    return { queryKey, queryFn };
}

export const useProductTopReviewQuery = ({
    productCount
}: {
    productCount: number;
}) => {
    const queryKey = ['product top review', productCount];
    const queryFn = async () => {
        return GetProductTopReview({ ProductCount: productCount });
    };

    return { queryKey, queryFn };
}

export const useSimilarProductQuery = ({
    productName,
    CategoryName,
    TagNames,
    Page,
    EachPage
}: {
    productName: string;
    CategoryName: string;
    TagNames?: string[];
    Page: number;
    EachPage: number
}) => {
    const queryKey = ['similar product', productName, CategoryName, TagNames, Page, EachPage];
    const queryFn = async () => {
        return GetSimilarProduct({ productName, CategoryName, TagNames, Page, EachPage });
    }

    return { queryKey, queryFn };
}

export const useProductHighestPrice = () => {
    const queryKey = ['highest price'];
    const queryFn = async () => {
        return GetProductHighestPrice();
    }

    return { queryKey, queryFn };
}