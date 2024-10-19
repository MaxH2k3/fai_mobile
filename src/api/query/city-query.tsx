import { GetAllCities, GetAllDistrictInCity, GetAllWardInDistrict } from "../city-api";

export const useCityQuery = () => {
    const queryKey = ['city'];
    const queryFn = async () => {
        return GetAllCities();
    };

    return { queryKey, queryFn };
};

export const useDistrictQuery = (cityCode: number) => {
    const queryKey = ['district', cityCode];
    const queryFn = async () => {
        return GetAllDistrictInCity(cityCode);
    };

    return { queryKey, queryFn };
};

export const useWardQuery = (districtCode: number) => {
    const queryKey = ['ward', districtCode];
    const queryFn = async () => {
        return GetAllWardInDistrict(districtCode);
    };

    return { queryKey, queryFn };
};