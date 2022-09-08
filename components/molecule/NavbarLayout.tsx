import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { NAVBAR_WIDTH } from "../../constants/number";

type Props = {
  children: ReactNode;
};

const NavbarLayout: React.FC<Props> = ({ children }) => {
  return (
    <Flex
      pt="4"
      flexDirection="column"
      alignItems="center"
      className="h-screen"
      position="fixed"
      bgColor="gray.50"
      w={NAVBAR_WIDTH}
    >
      {children}
    </Flex>
  );
};

export default NavbarLayout;
