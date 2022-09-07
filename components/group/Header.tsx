import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import LoginButton from "../molecule/LoginButton";

type Props = {};

const Header: React.FC<Props> = () => {
  const session = useSession();

  return (
    <Flex
      p={4}
      w="full"
      h="16"
      zIndex={1000}
      bgColor="white"
      position="fixed"
      boxShadow="md"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box flex={1}>
        <Link href="/">logo </Link>
      </Box>
      <Flex justifyContent="center">
        <form onSubmit={() => console.log("submit")}>
          <Flex flex={1}>
            <Input
              variant="filled"
              placeholder="Search"
              roundedTopEnd="none"
              roundedBottomEnd="none"
            />
            <IconButton
              type="submit"
              aria-label="header searching"
              icon={<FaSearch />}
              roundedTopStart="none"
              roundedBottomStart="none"
            />
          </Flex>
        </form>
      </Flex>
      <Flex flex={1} justifyContent="flex-end">
        <ButtonGroup>
          <LoginButton />
          {!session.data && (
            <Link href="/auth/signup">
              <Button size="sm">SIGN UP</Button>
            </Link>
          )}
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default Header;
