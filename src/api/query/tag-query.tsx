import { GetAllTags } from "../tag-api";

export const useTagsQuery = ({
    page,
    eachPage
}: {
    page: number,
    eachPage: number
}) => {
    const queryKey = ['tags', page, eachPage];
    const queryFn = async () => {
        return GetAllTags({
            page: page ?? 1,
            eachPage: eachPage ?? 100
        });
    };

    return { queryKey, queryFn };
};