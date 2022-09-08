import React from "react";
import NavbarLayout from "../molecule/NavbarLayout";
import NavbarMenu from "../molecule/NavbarMenu";

type Props = {};

const ProfileNavbar: React.FC<Props> = () => {
  return (
    <NavbarLayout>
      <NavbarMenu href="/profile">My details</NavbarMenu>
      <NavbarMenu href="/purchaseHistory">Purchase History</NavbarMenu>
    </NavbarLayout>
  );
};

export default ProfileNavbar;
