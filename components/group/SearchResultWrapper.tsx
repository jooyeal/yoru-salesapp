import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import SearchResult from "../molecule/SearchResult";

type Props = {};

const SearchResultWrapper: React.FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutSide(ref);

  return (
    <Box
      ref={ref}
      p={4}
      roundedBottom="md"
      minHeight="56"
      shadow="md"
      bgColor="white"
    >
      <SearchResult href="/profile" />
    </Box>
  );
};

export default SearchResultWrapper;
