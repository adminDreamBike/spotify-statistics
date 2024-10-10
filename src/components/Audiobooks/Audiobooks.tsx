"use client";

import { useAudiobooks } from "@/lib/queries/audiobooks";
import { SpotifyCard } from "../SpotifyCard/SpotifyCard";
import { Flex, Text } from "@chakra-ui/react";

export const Audiobooks = () => {
  const { audiobooks = {}, isError, isLoading } = useAudiobooks();
  const { albums = {} } = audiobooks;
  const { items = [] } = albums;
  return (
    <Flex flexDirection="column">
      <Text fontSize="20px" fontWeight="bold">
        New Releases
      </Text>
      <Flex gap="12px" flexWrap="wrap">
        {items.slice(0, 6).map((item) => {
          return (
            <SpotifyCard key={item.id} item={item} isLoading={isLoading} />
          );
        })}
      </Flex>
    </Flex>
  );
};
