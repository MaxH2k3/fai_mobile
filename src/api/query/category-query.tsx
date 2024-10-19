import { GetAllCategories } from "../catergory-api";

export const useCategoriesQuery = ({
    page,
    eachPage
}: {
    page: number,
    eachPage: number
}) => {
    const queryKey = ['categories', page, eachPage];
    const queryFn = async () => {
        return GetAllCategories({
            page: page ?? 1,
            eachPage: eachPage ?? 100
        });
    };

    return { queryKey, queryFn };
};