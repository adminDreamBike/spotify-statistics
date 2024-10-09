import { Albums, Item, Track } from "@/api/types";
import { useTrackStore } from "@/lib/stores/tracks";
import {
  Card,
  CardBody,
  Heading,
  IconButton,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

export const SpotifyCard = ({
  item,
  isLoading,
  rounded = false,
}: {
  item: Item | any;
  isLoading?: boolean;
  rounded?: boolean;
}) => {
  const { images, name, artists = [], type } = item;
  const { name: nameArtist } = artists[0] || {};
  const { setTrack } = useTrackStore();
  const handleClickPlay = () => {
    const { id, name, href, urlImage, artist, uri } = item;
    setTrack({
      id: id,
      name: name,
      href: uri,
      urlImage: urlImage,
      artist: artist,
    });
  };

  return (
    <Skeleton isLoaded={!isLoading}>
      <Card
        height={rounded ? "180px" : "240px"}
        width="180px"
        position="relative"
        direction={{ base: "column", sm: "row" }}
        borderRadius={rounded ? "180px" : "none"}
      >
        <CardBody height="240px" width="180px" padding="0">
          <Image
            src={images[0]?.url}
            borderRadius={rounded ? "50%" : "lg"}
            alt="image "
            height={rounded ? "180px" : "240px"}
            width="180px"
          />

          <Stack mt="6" spacing="3" padding="0 10px">
            <Heading size="sm" color="#FFFFFF">
              {name}
            </Heading>
            <Text color="#b3b3b3">{nameArtist}</Text>
            {rounded && <Text color="#b3b3b3">{type}</Text>}
          </Stack>
          <IconButton
            icon={<FaPlay />}
            aria-label="play"
            background="#1ed760"
            isRound={true}
            variant="solid"
            position="absolute"
            bottom="10px"
            right="10px"
            onClick={handleClickPlay}
          />
        </CardBody>
      </Card>
    </Skeleton>
  );
};
