import { ReviewType } from './ReviewType';

export type ProductType = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  images: string;
  sizes: string[];
  size: string;
  colors: string[];
  color: string;
  description: string;
  categories: string;
  is_bestseller: boolean;
  is_featured: boolean;
  is_out_of_stock: boolean;
  old_price?: number;
  quantity?: number;
  reviews: ReviewType[];
  types: string[];
};
