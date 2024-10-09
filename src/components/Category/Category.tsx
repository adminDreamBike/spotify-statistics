import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { getRandomColor } from "../../lib/utils";

export const Category = ({ item }) => {
  const { name, icons } = item;
  const handleClickCategory = () => {
    console.log("item", item);
  };
  return (
    <Card
      background={getRandomColor()}
      width="310px"
      height="174px"
      overflow="hidden"
      borderRadius="8px"
      cursor="pointer"
      onClick={handleClickCategory}
    >
      <CardBody width="310px" height="174px" position="relative">
        <Heading
          size="md"
          paddingLeft="10px"
          overflowWrap="break-word"
          color="white"
        >
          {name}
        </Heading>
        <Image
          src={icons[0].url}
          alt="category img"
          height="120px"
          width="45%"
          transform="rotate(25deg) translate(18%, -2%)"
          position="absolute"
          zIndex="1"
          right="0"
        />
      </CardBody>
    </Card>
  );
};
