"use client";

import { Flex, Text } from "@chakra-ui/react";
import { SpotifyCard } from "../SpotifyCard/SpotifyCard";
import { useRecommendationsTrack } from "@/lib/queries/song";
import { Album } from "@/api/types";

export const Song = () => {
  const { tracks = [], isLoading } = useRecommendationsTrack();
  const getInfoFromTracks = (): Array<Album> => {
    return tracks?.map((track: any) => track.album) || [];
  };
  return (
    <Flex flexDirection="column" flexWrap="wrap">
      <Text fontSize="20px" fontWeight="bold">
        Recommended
      </Text>
      <Flex gap="12px" flexWrap="wrap">
        {getInfoFromTracks()
          ?.slice(0, 6)
          .map((item) => {
            return (
              <SpotifyCard key={item.id} item={item} isLoading={isLoading} />
            );
          })}
      </Flex>
    </Flex>
  );
};
