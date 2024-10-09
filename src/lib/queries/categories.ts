import { getCategories } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => getCategories(),
  });

  return { categories: data?.categories, isLoading, isError, error };
};
