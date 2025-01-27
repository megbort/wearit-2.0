import { CategoryType } from './category';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  colors: string[];
  sizes: string[];
  details: string[];
  featured?: boolean;
  sale?: boolean;
  category?: CategoryType;
}
