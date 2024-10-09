import { Flex } from "@chakra-ui/react";
import SpotifyPlayer from "react-spotify-web-playback";
import { getToken } from "../../api/config";
import ReactAudioPlayer from "react-audio-player";

export const Player = ({ uri }) => {
  console.log("getToken()", getToken());
  return (
    <Flex>
      {/* <SpotifyPlayer token={getToken() || ""} uris={uri} /> */}
      <ReactAudioPlayer src={uri} controls={true} autoPlay={true} />
    </Flex>
  );
};
