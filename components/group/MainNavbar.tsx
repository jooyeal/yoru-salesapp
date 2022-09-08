import { Box } from "@chakra-ui/react";
import React from "react";
import NavbarMenu from "../molecule/NavbarMenu";
import { NAVBAR_WIDTH } from "../../constants/number";
import NavbarLayout from "../molecule/NavbarLayout";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  return (
    <NavbarLayout>
      <NavbarMenu href="/anime">ANIME</NavbarMenu>
      <NavbarMenu href="">FOOD</NavbarMenu>
    </NavbarLayout>
  );
};

export default Navbar;
