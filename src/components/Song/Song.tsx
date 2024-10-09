"use client";

import { Flex, Text } from "@chakra-ui/react";
import { SpotifyCard } from "../SpotifyCard/SpotifyCard";
import { useRecommendationsTrack } from "@/lib/queries/song";
import { Album } from "@/api/types";

export const Song = () => {
  const { tracks = [], isError, isLoading } = useRecommendationsTrack();
  const getInfoFromTracks = (): Array<Album> => {
    let result = [];
    result = tracks?.map((track) => {
      return [
        {
          ...track.album,
        },
      ];
    });
    return result;
  };
  return (
    <Flex flexDirection="column" flexWrap="wrap">
      <Text fontSize="20px" fontWeight="bold">
        Recommended
      </Text>
      <Flex gap="12px">
        {getInfoFromTracks()
          ?.slice(0, 6)
          .map((item) => {
            return (
              <SpotifyCard key={item.id} item={item[0]} isLoading={isLoading} />
            );
          })}
      </Flex>
    </Flex>
  );
};
