import React from "react";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from "next-auth/react";
import { Provider } from "next-auth/providers";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from "@chakra-ui/react";

type Props = {
  providers: Provider;
};

const SignIn: React.FC<Props> = ({ providers }) => {
  const router = useRouter();

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
    if (!response?.error && response?.url) await router.push(response?.url);
  };

  return (
    <Flex
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
            <Button w="full" type="submit">
              Sign in
            </Button>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  //if session is existed redirect home
  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  return {
    props: { providers: providers, csrfToken: csrfToken },
  };
};
