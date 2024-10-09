"use client";

import { Button, Flex, IconButton, Stack } from "@chakra-ui/react";
import { Search } from "../Search/Search";
import { FaSpotify } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <Flex background="black" justifyContent="space-between" padding="10px">
      <Stack
        direction="row"
        spacing={20}
        width="100%"
        justifyContent="space-between"
      >
        <IconButton
          aria-label="spotify-icon"
          color="white"
          background="transparent"
          icon={<FaSpotify />}
          fontSize="20px"
        />
        <Search />
        <Button onClick={() => router.push(`/login`)}>Log in</Button>
      </Stack>
    </Flex>
  );
};
