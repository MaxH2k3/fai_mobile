const faiEndPoint = 'https://fashion-ai-innovation.azurewebsites.net/api/v1';
const cityEndPoint = 'https://provinces.open-api.vn/api'
const faiAiEndPoint = 'https://fai-ai.azurewebsites.net/api'


export const createQueryString = (params: Record<string, any>): string => {
  const urlParams = new URLSearchParams();

  Object.keys(params).forEach(key => {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach(val => urlParams.append(key, val));
    } else if (value !== undefined && value !== null) {
      urlParams.append(key, value);
    }
  });

  return urlParams.toString();
};

//AUTH
export const register = `${faiEndPoint}/authentication/register`
export const login = `${faiEndPoint}/authentication/login`
export const logout = `${faiEndPoint}/authentication/logout`
export const verify = `${faiEndPoint}/authentication/verify`
export const resendOTP = `${faiEndPoint}/authentication/resend`
export const googleLogin = `${faiEndPoint}/authentication/google`
export const resetPassword = `${faiEndPoint}/authentication/reset-password`
export const forgotPassword = `${faiEndPoint}/authentication/forgot-password`


// PRODUCT
export const getAllProduct = `${faiEndPoint}/product`
export const getProductByName = `${faiEndPoint}/product`
export const getHighestProductPrice = `${faiEndPoint}/product/highestPrice`
export const searchProduct = `${faiEndPoint}/product/search`
export const getProductNames = `${faiEndPoint}/product/name`
export const createProduct = `${faiEndPoint}/product/create`
export const searchProductByName = `${faiEndPoint}/product/searchByName`
export const getProductRecommend = `${faiEndPoint}/product/recommend`
export const getProductBestSeller = `${faiEndPoint}/product/mostSold`
export const getProductTopReview = `${faiEndPoint}/product/topReview`
export const getSimilarProduct = `${faiEndPoint}/product/similar`


// PAYMENT
export const createPayment = `${faiEndPoint}/payments`
export const checkOut = `${faiEndPoint}/checkout`


// USER
export const createBrandProfile = `${faiEndPoint}/users/brand`
export const createCustomerProfile = `${faiEndPoint}/users/customer`
export const updateUserProfile = `${faiEndPoint}/users`
export const getUserProfile = `${faiEndPoint}/users`
export const getTopBrands = `${faiEndPoint}/brand/top`
export const getBrandTotalRevenue = `${faiEndPoint}/brand/revenue`
export const getBrandRevenueStatistics = `${faiEndPoint}/brand/revenue/filter`
export const getBrandTotalProductSold = `${faiEndPoint}/brand/productCount`
export const getBrandTotalProductCount = `${faiEndPoint}/product/count`
export const getBrandReviewStatistics = `${faiEndPoint}/brand/statistics`
export const getBrandReviewStatisticsWithDate = `${faiEndPoint}/brand/statistics/filter`

//CATEGORY
export const getAllCategories = `${faiEndPoint}/category`


//STYLES
export const getAllStyles = `${faiEndPoint}/style`


//TAGS
export const getAllTags = `${faiEndPoint}/tag`


//FEEDBACKS
export const getFeedbackByProduct = `${faiEndPoint}/feedbacks/product`
export const createFeedback = `${faiEndPoint}/feedbacks`
export const updateFeedbacks = `${faiEndPoint}/feedbacks/products`
export const deleteFeedbacks = `${faiEndPoint}/feedbacks/products`


//CITY (3RD party) 
export const getAllCity = `${cityEndPoint}`
export const getAllProvinceInCity = `${cityEndPoint}/p`
export const getDistrictInProvince = `${cityEndPoint}/d`


// ORDER 
export const getAllOrderCountByBrand = `${faiEndPoint}/order/count`
export const getAllOrdersByBrand = `${faiEndPoint}/order/name`
export const getOrderDetailById = `${faiEndPoint}/orderDetail`

// AI 
export const tryOnOutfit = `${faiAiEndPoint}/try-on`