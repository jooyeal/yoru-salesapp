import { Box, Spacer } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
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
  const [isShowNav, setIsShowNav] = useState<boolean>(true);
  const checkIsAuthPage = () => {
    return router.pathname.includes("auth");
  };

  useEffect(() => {
    if (document.title === "Not Found") setIsShowNav(false);
    else {
      setIsShowNav(true);
    }
  }, [router]);

  return (
    <Box bgColor="white">
      <Header />
      <Spacer h="16" />
      {children}
      {checkIsAuthPage() || !isShowNav ? (
        <Footer />
      ) : (
        <Box pl={NAVBAR_WIDTH}>
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
