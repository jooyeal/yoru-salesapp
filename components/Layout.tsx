import { Box, Spacer } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Footer from "./group/Footer";
import Header from "./group/Header";
import { NAVBAR_WIDTH } from "../constants/number";
import { useRouter } from "next/router";
import { SessionContextValue } from "next-auth/react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const checkIsAuthPage = () => {
    return router.pathname.includes("auth");
  };

  return (
    <div>
      <Header />
      <Spacer h="16" />
      {children}
      {checkIsAuthPage() ? (
        <Footer />
      ) : (
        <Box pl={NAVBAR_WIDTH}>
          <Footer />
        </Box>
      )}
    </div>
  );
};

export default Layout;
