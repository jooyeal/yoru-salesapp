import { Box } from "@chakra-ui/react";
import React from "react";
import NavbarMenu from "../molecule/NavbarMenu";
import { NAVBAR_WIDTH } from "../../constants/number";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  return (
    <Box
      className="h-screen"
      position="fixed"
      bgColor="gray.50"
      w={NAVBAR_WIDTH}
    >
      <NavbarMenu href="">ANIME</NavbarMenu>
      <NavbarMenu href="">FOOD</NavbarMenu>
    </Box>
  );
};

export default Navbar;
