import { useTrackStore } from "@/lib/stores/tracks";
import { Flex } from "@chakra-ui/react";
import ReactAudioPlayer from "react-audio-player";
import { Player } from "../Player/Player";
export const Footer = () => {
  const { track } = useTrackStore();
  return (
    <Flex
      background="red"
      position="fixed"
      bottom="0px"
      width="100%"
      height="80px"
      zIndex="2"
    >
      <h1>{track?.name}</h1>
      <Player uri={track?.href} />
    </Flex>
  );
};
