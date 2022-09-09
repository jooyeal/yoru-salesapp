import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

type Props = {};

const Custom404 = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Not Found</title>
      </Head>
      Custom404
    </Box>
  );
};

export default Custom404;
