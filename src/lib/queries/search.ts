import { search } from "@/api/search";
import { Search } from "@/api/types";
import { useQuery } from "@tanstack/react-query";

export const useSearch = ({ q, type }: Search) => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["search"],
    queryFn: async () => search({ q: q, type: type }),
  });

  return { search: data?.artists, isLoading, isError, error, refetch };
};
