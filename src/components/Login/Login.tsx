"use client";

import { useLogin } from "@/lib/queries/login";
import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const { login, isError, error, refetch } = useLogin();
  const handleLogin = () => {
    refetch();
    localStorage.setItem("token", JSON.stringify(login?.access_token));
    if (!isError) {
      router.push(`/`);
    }
  };
  return (
    <Center minHeight="90vh">
      <Card width="534px" background="#121212">
        <CardBody>
          <FormControl isRequired textAlign="center">
            <FormLabel color="white">Email or username</FormLabel>
            <Input
              placeholder="Email or username"
              height="50px"
              value="​eafeb266060e4722b675161d732ef7c0"
              color="white"
              disabled
            />
            <FormLabel color="white">Password</FormLabel>
            <Input
              placeholder="Password"
              height="50px"
              value="​889ed33443eb49c8867d11ca4bcf40ce"
              disabled
              color="white"
            />
            {isError && <FormErrorMessage>{error?.message}</FormErrorMessage>}

            <Button
              background="#1ed760"
              width="324px"
              marginTop="20px"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </Center>
  );
};
