import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const VALIDATION = false;
export const BASE_URL = 'https://manero.rn-admin.site/';
export const AUTHORIZATION_TOKEN = 'aH3KCew1YsWhWqW0tqNU3ndzHb3RdblI';
export const ENDPOINTS = {
  getTags: 'api/tags',
  getSizes: 'api/sizes',
  getColors: 'api/colors',
  getBanners: 'api/banners',
  getCarousel: 'api/slides',
  getProducts: 'api/products',
  getCategories: 'api/categories',
  getPromocodes: 'api/promocodes',
  getProductBestSeller: '/api/v1/product/mostSold?ProductCount=5',
};
