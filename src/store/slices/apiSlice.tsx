import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, AUTHORIZATION_TOKEN, ENDPOINTS} from '../../config/config';

import {
  ProductType,
  BannerType,
  CarouselType,
  TagType,
  CategoryType,
} from '../../types';
import { IProductMain } from '../../types/ProductType';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${AUTHORIZATION_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<{products: ProductType[]}, void>({
      query: () => ENDPOINTS.getProducts,
    }),
    getBanners: builder.query<{banners: BannerType[]}, void>({
      query: () => ENDPOINTS.getBanners,
    }),
    getCarousel: builder.query<{carousel: CarouselType[]}, void>({
      query: () => ENDPOINTS.getCarousel,
    }),
    getCategories: builder.query<{categories: CategoryType[]}, void>({
      query: () => ENDPOINTS.getCategories,
    }),
    getTags: builder.query<{tags: TagType[]}, void>({
      query: () => ENDPOINTS.getTags,
    }),
    getProductsByTag: builder.query<{products: ProductType[]}, string>({
      query: (tag) => `${ENDPOINTS.getProducts}?tag=${tag}`,
    }),
    getProductsByCategory: builder.query<{products: ProductType[]}, string>({
      query: (category) => `${ENDPOINTS.getProducts}?category=${category}`,
    }),
    getProductsBySearch: builder.query<{products: ProductType[]}, string>({
      query: (search) => `${ENDPOINTS.getProducts}?search=${search}`,
    }),
    getColors: builder.query<{colors: any[]}, void>({
      query: () => ENDPOINTS.getColors,
    }),
    getPromocodes: builder.query<{promocodes: any[]}, void>({
      query: () => ENDPOINTS.getPromocodes,
    }),
    getProductBestSeller: builder.query<{ products: IProductMain[] }, void>({
      query: () => ENDPOINTS.getProductBestSeller,
    })
  }),
});

export const {
  useGetTagsQuery,
  useGetColorsQuery,
  useGetBannersQuery,
  useGetProductsQuery,
  useGetCarouselQuery,
  useGetCategoriesQuery,
  useGetPromocodesQuery,
  useGetProductsByTagQuery,
  useGetProductBestSellerQuery
} = apiSlice;

export const queryHooks = {
  useGetTagsQuery,
  useGetColorsQuery,
  useGetBannersQuery,
  useGetProductsQuery,
  useGetCarouselQuery,
  useGetPromocodesQuery,
  useGetCategoriesQuery,
  useGetProductsByTagQuery,
  useGetProductBestSellerQuery
};

export default apiSlice.reducer;
