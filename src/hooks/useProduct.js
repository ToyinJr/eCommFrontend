import { useQuery } from "@tanstack/react-query";

const app = import.meta.env.VITE_APIURL;

const fetchProduct = async (id) => {
  const res = await fetch(`${app}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

export const useProduct = (id) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });