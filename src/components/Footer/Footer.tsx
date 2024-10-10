import { useTrackStore } from "@/lib/stores/tracks";
import { Flex } from "@chakra-ui/react";
import { Player } from "../Player/Player";
export const Footer = () => {
  const { track } = useTrackStore();
  const { name, href, urlImage, artitst } = track;
  return (
    <Flex
      position="fixed"
      bottom="0px"
      width="100%"
      height="auto"
      zIndex="2"
      background="black"
      padding="20px"
    >
      <Player
        currentSong={{ title: name, src: href, url: urlImage, artist: artitst }}
      />
    </Flex>
  );
};
