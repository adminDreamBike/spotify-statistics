import {
  Divider,
  Flex,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { PiBrowsers } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { useRouter } from "next/navigation";

export const Search = () => {
  const router = useRouter();
  const handleFocusInput = () => {
    router.push("/search");
  };
  return (
    <Flex flexGrow="2">
      <Stack direction="row" spacing={4} width="100%">
        <IconButton
          aria-label="home"
          icon={<GoHomeFill />}
          fontSize="20px"
          backgroundColor="#1f1f1f"
          color="white"
          isRound={true}
          onClick={() => router.push("/")}
        />
        <InputGroup position="relative">
          <InputLeftElement>
            <IconButton
              isRound={true}
              variant="solid"
              aria-label="Search database"
              fontSize="20px"
              icon={<SearchIcon />}
              color="white"
              backgroundColor="transparent"
            />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="What do you want to play"
            textColor="white"
            background="#1f1f1f"
            border="none"
            onFocusCapture={handleFocusInput}
            onChange={(event) => router.push(`/search?q=${event.target.value}`)}
          />
          <InputRightElement>
            <Divider orientation="vertical" background="white" />
            <IconButton
              aria-label="Browse spotify"
              icon={<PiBrowsers />}
              background="transparent"
              color="white"
              fontSize="20px"
            />
          </InputRightElement>
        </InputGroup>
      </Stack>
    </Flex>
  );
};
