import type {TagType} from './TagType';
import type {BannerType} from './BannerType';
import type {TabBarType} from './TabBarType';
import type {ReviewType} from './ReviewType';
import type {ProductType} from './ProductType';
import type {CategoryType} from './CategoryType';
import type {CarouselType} from './CarouselType';
import type {PromocodeType} from './PromocodeType';
import type {NotificationType} from './NotificationType';
import type {RootStackParamList} from './RootStackParamList';

export {
  TagType,
  TabBarType,
  ReviewType,
  BannerType,
  ProductType,
  CategoryType,
  CarouselType,
  PromocodeType,
  NotificationType,
  RootStackParamList,
};

// export types with variables - types
// Path: src/types/index.tsx
// Compare this snippet from src/types/RootStackParamList.tsx:
// write variable types with export
export type Types = {
  TagType: TagType;
  ProductType: ProductType;
  FAQ: undefined;
  Filter: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Search: undefined;
  Reviews: undefined;
  Checkout: undefined;
  MyAddress: undefined;
  Onboarding: undefined;
  EditProfile: undefined;
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
  Product: {item: ProductType};
  MyPromocodesEmpty: undefined;
  SignUpAccountCreated: undefined;
  VerifyYourPhoneNumber: undefined;
  Description: {description: string};
  ForgotPasswordSentEmail: undefined;
  Shop: {title: string; products: ProductType[]};
};
