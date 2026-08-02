import { useQuery } from "@tanstack/react-query";

const app = import.meta.env.VITE_APIURL;

const fetchProducts = async () => {
  const res = await fetch(`${app}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });