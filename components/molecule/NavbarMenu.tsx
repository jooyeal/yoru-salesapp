import { Box, Button, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import useLinkSelect from "../../hooks/useLinkSelect";

type Props = {
  href: string;
  children: ReactNode;
};

const NavbarMenu: React.FC<Props> = ({ href, children }) => {
  const currentLink = useLinkSelect();

  return (
    <Link href={href}>
      <Button
        className="w-4/5"
        p="2"
        h="10"
        background={href === currentLink ? "gray.300" : "none"}
        transition="background-color 300ms ease-in-out"
        _hover={{ background: "gray.300", color: "white" }}
      >
        <Text fontSize="lg" as="b">
          {children}
        </Text>
      </Button>
    </Link>
  );
};

export default NavbarMenu;
