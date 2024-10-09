import { getNewAlbumReleases } from "@/api/album";
import { useQuery } from "@tanstack/react-query";

export const useAlbum = () => {
  const { data, isLoading, isError, error,  } = useQuery({
    queryKey: ["album"],
    queryFn: async () => getNewAlbumReleases(),
  });

  return { newReleases: data, isLoading, isError, error };
};
