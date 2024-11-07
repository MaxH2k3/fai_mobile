import { IProductMain } from '../constants/model/product-interface';
import { IUserProfile } from '../constants/model/user-interface';
import { ProductType } from './ProductType';
import { ReviewType } from './ReviewType';

export type RootStackParamList = {
  FAQ: undefined;
  Filter: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Search: undefined;
  Reviews: {
    productId: string;
  };
  Checkout: undefined;
  MyAddress: undefined;
  Onboarding: undefined;
  EditProfile: {
    user: IUserProfile
  };
  EditPersonalProfile: {
    user: IUserProfile
  };
  NewPassword: undefined;
  OrderFailed: undefined;
  AddANewCard: undefined;
  OrderHistory: undefined;
  LeaveAReview: undefined;
  MyPromocodes: undefined;
  TabNavigator: undefined;
  Notifications: undefined;
  LeaveAReviews: undefined;
  PaymentMethod: undefined;
  ForgotPassword: undefined;
  TrackYourOrder: undefined;
  AddANewAddress: undefined;
  OrderSuccessful: undefined;
  ConfirmationCode: undefined;
  Product: {
    item: ProductType
  };
  ProductDetail: {
    name: string;
  }
  ProductList: {
    title: string
    products: IProductMain[]
  }
  AllProductPage: undefined;
  MyPromocodesEmpty: undefined;
  SignUpAccountCreated: undefined;
  CheckoutPaymentMethod: undefined;
  VerifyYourPhoneNumber: undefined;
  Description: { description: string };
  ForgotPasswordSentEmail: undefined;
  CheckoutShippingDetails: undefined;
  Shop: {
    title: string;
    products: ProductType[]
  };
  ChatBot: undefined;
  TryingRoom: {
    PersonInfo: string[];
    Categories: string[];
    ProductImage: string;
  },
  PaymentPage: {
    url: string
    method: string
  },
};
