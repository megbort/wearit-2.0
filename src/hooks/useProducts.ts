import { useState, useEffect } from 'react';
import client from '@/services/apollo/client';
import {
  GET_PRODUCTS_QUERY,
  GET_FEATURED_PRODUCTS_QUERY,
  GET_PRODUCT_QUERY,
} from '@/services/graphql/queries/products';
import type {
  ProductsResponse,
  FeaturedProductsResponse,
  ProductResponse,
} from '@/services/graphql/models/product';
import type { Product } from '@/services/models/product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    client
      .query<ProductsResponse>({ query: GET_PRODUCTS_QUERY })
      .then((result) => {
        setProducts(result.data?.products ?? []);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    client
      .query<FeaturedProductsResponse>({ query: GET_FEATURED_PRODUCTS_QUERY })
      .then((result) => {
        setProducts(result.data?.featuredProducts ?? []);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    client
      .query<ProductResponse>({
        query: GET_PRODUCT_QUERY,
        variables: { id },
      })
      .then((result) => {
        setProduct(result.data?.product ?? null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { product, loading, error };
};
