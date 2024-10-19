import { GetAllStyles } from "../style-api";

export const useStylesQuery = ({
    page,
    eachPage
}: {
    page: number,
    eachPage: number
}) => {
    const queryKey = ['styles', page, eachPage];
    const queryFn = async () => {
        return GetAllStyles({
            page: page ?? 1,
            eachPage: eachPage ?? 100
        });
    };

    return { queryKey, queryFn };
};