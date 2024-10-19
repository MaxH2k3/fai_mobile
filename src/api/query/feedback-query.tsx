import { GetFeedbacksByProduct } from "../feedback-api";

export const useFeedbacksQuery = ({
    productId,
    page,
    eachPage
}: {
    productId: string
    page: number,
    eachPage: number
}) => {
    const queryKey = ['feedback', {
        productId,
        page,
        eachPage
    }];
    const queryFn = async () => {
        return GetFeedbacksByProduct({
            productId: productId,
            page: page,
            eachPage: eachPage
        });
    };

    return { queryKey, queryFn };
};
