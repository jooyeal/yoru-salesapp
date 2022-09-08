import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import LoginButton from "../molecule/LoginButton";
import SearchResultWrapper from "./SearchResultWrapper";

type Props = {};

const Header: React.FC<Props> = () => {
  const session = useSession();
  const [isSearching, setIsSearching] = useState<boolean>(false);

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
        <form className="fixed top-3" onSubmit={() => console.log("submit")}>
          <Flex>
            <Input
              variant="filled"
              placeholder="Search"
              roundedTopEnd="none"
              roundedBottomEnd="none"
              onFocus={() => setIsSearching(true)}
            />
            <IconButton
              type="submit"
              aria-label="header searching"
              icon={<FaSearch />}
              roundedTopStart="none"
              roundedBottomStart="none"
            />
          </Flex>
          {isSearching && <SearchResultWrapper />}
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
          <Link href="/cart">
            <IconButton size="sm" aria-label="cart button" icon={<BsCart />} />
          </Link>
          <Link href="/profile">
            <IconButton size="sm" aria-label="user-profile" icon={<BiUser />} />
          </Link>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default Header;
