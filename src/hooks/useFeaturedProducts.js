import { useQuery } from "@tanstack/react-query";

const app = import.meta.env.VITE_APIURL;

const fetchFeaturedProducts = async () => {
  const res = await fetch(`${app}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch featured products");
  }

  const data = await res.json();

  // Keep only featured products
  return data.filter((product) => product.isFeatured);
};

export const useFeaturedProducts = () =>
  useQuery({
    queryKey: ["featured-products"],
    queryFn: fetchFeaturedProducts,
  });