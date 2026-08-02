import { useQuery } from "@tanstack/react-query";

const app = import.meta.env.VITE_APIURL;

const fetchCategories = async () => {
  const response = await fetch(`${app}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};