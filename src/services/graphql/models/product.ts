import type { Product } from '@/services/models/product';

export interface ProductsResponse {
  products: Product[];
}

export interface ProductResponse {
  product: Product | null;
}

export interface FeaturedProductsResponse {
  featuredProducts: Product[];
}

export interface ProductsByCategoryResponse {
  productsByCategory: Product[];
}
