import { getSeveralArtist } from "@/api/artists";
import { useQuery } from "@tanstack/react-query";

export const useArtists = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["artist"],
    queryFn: async () => getSeveralArtist(),
  });

  return { artists: data?.artists, isLoading, isError, error };
};
