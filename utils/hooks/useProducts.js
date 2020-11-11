import { useState, useEffect } from "react";
import PRODUCTS from "../../mocks/products";

const delay = 200;

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setILoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(PRODUCTS);
      setILoading(false);
    }, delay);
  }, []);

  return { products, isLoading };
};

export default useProducts;
