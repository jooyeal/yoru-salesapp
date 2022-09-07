import React, { useState } from "react";
import { getProviders, getSession, signIn } from "next-auth/react";
import { Provider } from "next-auth/providers";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";

type Props = {
  providers: Provider;
};

const SignIn: React.FC<Props> = ({ providers }) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  //login function for credential login
  const login = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await signIn("Credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "http://localhost:3000",
    });

    if (!response?.error) await router.push(response?.url ?? "/");
    else {
      switch (response.status) {
        case 401:
          setErrorMessage("Please check your email or password");
          break;
        default:
          setErrorMessage("System error is occured");
      }
    }
  };

  return (
    <Flex
      w="full"
      className="h-screen"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="80">
        {Object.values(providers).map((provider) => {
          if (provider.name !== "Credentials") {
            return (
              <Box key={provider.name}>
                <Button w="full" onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </Button>
              </Box>
            );
          }
        })}
        <Spacer h="5" />
        <Divider />
      </Box>
      <Box>
        <Spacer h="5" />
        <form method="POST" onSubmit={login}>
          <FormControl w="80">
            <FormLabel>Email</FormLabel>
            <Input name="email" type="text" />
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" />
            <Spacer h="5" />
            <Button colorScheme="teal" w="full" type="submit">
              SIGN IN
            </Button>
          </FormControl>
        </form>
      </Box>
      <Center>
        <Text color="red">{errorMessage}</Text>
      </Center>
    </Flex>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  const providers = await getProviders();

  //if session is existed redirect home
  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  return {
    props: { providers: providers },
  };
};
