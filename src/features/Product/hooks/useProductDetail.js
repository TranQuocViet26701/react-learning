import { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';

export function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const product = await productApi.get(productId);

        setProduct(product);
        setLoading(false);
      } catch (error) {}
    })();
  }, [productId]);

  return { product, loading };
}
