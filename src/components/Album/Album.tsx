"use client";

import { useAlbum } from "@/lib/queries/album";
import { SpotifyCard } from "../SpotifyCard/SpotifyCard";
import { Flex, Text } from "@chakra-ui/react";

export const Album = () => {
  const { newReleases = {}, isError, isLoading } = useAlbum();
  const { albums = {} } = newReleases;
  const { items = [] } = albums;
  return (
    <Flex flexDirection="column" flexWrap="wrap">
      <Text fontSize="20px" fontWeight="bold">
        New Releases
      </Text>
      <Flex gap="12px">
        {items.slice(0, 6).map((item) => {
          return (
            <SpotifyCard key={item.id} item={item} isLoading={isLoading} />
          );
        })}
      </Flex>
    </Flex>
  );
};
