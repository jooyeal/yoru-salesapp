import { Box, Button, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const NavbarMenu: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>
        <Box
          p="2"
          w="full"
          h="10"
          borderBottom="1px"
          borderColor="gray.300"
          transition="background-color 300ms ease-in-out"
          _hover={{ background: "gray.300" }}
        >
          <Text fontSize="lg" as="b">
            {children}
          </Text>
        </Box>
      </a>
    </Link>
  );
};

export default NavbarMenu;
