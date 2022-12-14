import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { signUpWrapper } from "../../lib/services/signUpWrapper";

type Props = {};

const Signup: React.FC<Props> = ({}) => {
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [isSignUpSucceed, setIsSignUpSucceed] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordVerification = e.target.passwordVerification.value;
    const nickname = e.target.nickname.value;
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;

    if (password !== passwordVerification) {
      setPasswordError(true);
      setErrorMessage("Please check password");
    } else {
      setPasswordError(false);
      setErrorMessage(undefined);
      signUpWrapper({
        data: { email, password, nickname, firstname, lastname },
        successCallback: (status, data) => {
          setErrorMessage(undefined);
          setIsSignUpSucceed(true);
        },
        errorCallback: (status, data) => setErrorMessage(data.message),
      });
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
      {isSignUpSucceed ? (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10"
        >
          <Text fontSize="3xl" as="b">
            Thanks for signing up. Welcome to our shop. have a nice shopping
            trip.
          </Text>
          <Link href="/auth/signin">
            <Button colorScheme="teal" size="lg">
              GO TO SIGN IN PAGE
            </Button>
          </Link>
        </Flex>
      ) : (
        <Box>
          <Center>
            <Text fontSize="3xl" as="b">
              SIGN UP
            </Text>
          </Center>
          <Spacer h="6" />
          <form method="POST" onSubmit={onSubmit}>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" required />
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              isInvalid={passwordError}
              required
            />
            <FormLabel>Password Verification</FormLabel>
            <Input
              name="passwordVerification"
              type="password"
              required
              isInvalid={passwordError}
            />
            <FormLabel>Firstname</FormLabel>
            <Input name="firstname" type="text" required />
            <FormLabel>Lastname</FormLabel>
            <Input name="lastname" type="text" required />
            <FormLabel>Nickname</FormLabel>
            <Input name="nickname" type="text" required />
            <Spacer h="5" />
            <Button colorScheme="teal" w="full" type="submit">
              SIGN UP
            </Button>
          </form>
          <Spacer h="3.5" />
          <Center>
            <Text color="red">{errorMessage}</Text>
          </Center>
        </Box>
      )}
    </Flex>
  );
};

export default Signup;
