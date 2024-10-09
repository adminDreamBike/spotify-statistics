import { getRecommendations } from "@/api/song";
import { useQuery } from "@tanstack/react-query";

export const useRecommendationsTrack = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["song"],
    queryFn: async () => getRecommendations(),
  });

  return { tracks: data?.tracks, isError, isLoading, error };
};
