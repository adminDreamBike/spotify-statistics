import { Album } from "@/components/Album/Album";
import { Artistis } from "@/components/Artists/Artists";
import { Song } from "@/components/Song/Song";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection="column" gap="120px" padding="150px 20px">
      <Album />
      {/* <Audiobooks /> */}
      <Song />
      <Artistis />
    </Flex>
  );
}
