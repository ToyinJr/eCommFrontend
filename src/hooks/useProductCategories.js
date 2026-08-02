import { useQuery } from "@tanstack/react-query";

const app = import.meta.env.VITE_APIURL;

const fetchProducts = async (categoryId) => {
  const res = await fetch(
    `${app}/products/products/${categoryId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export const useCategoryProducts = (categoryId) =>
  useQuery({
    queryKey: ["category-products", categoryId],
    queryFn: () => fetchProducts(categoryId),
    enabled: !!categoryId,
  });