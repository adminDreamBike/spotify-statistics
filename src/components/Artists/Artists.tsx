"use client";

import { useArtists } from "@/lib/queries/artists";
import { Flex, Text } from "@chakra-ui/react";
import { SpotifyCard } from "../SpotifyCard/SpotifyCard";

export const Artistis = () => {
  const { artists = [], isError, isLoading } = useArtists();

  return (
    <Flex flexDirection="column" flexWrap="wrap">
      <Text fontSize="20px" fontWeight="bold">
        Artists
      </Text>
      <Flex gap="12px">
        {artists?.slice(0, 4).map((item) => {
          return (
            <SpotifyCard key={item.id} item={item} isLoading={isLoading} />
          );
        })}
      </Flex>
    </Flex>
  );
};
