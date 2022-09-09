import { Box } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import SearchResult from "../molecule/SearchResult";

type Props = {
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

const SearchResultWrapper: React.FC<Props> = ({ setIsSearching }) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutSide(ref, () => setIsSearching(false));

  return (
    <Box
      ref={ref}
      p={4}
      roundedBottom="md"
      minHeight="56"
      shadow="md"
      bgColor="white"
    >
      <Box onClick={() => setIsSearching(false)}>
        <SearchResult href="/profile" />
      </Box>
    </Box>
  );
};

export default SearchResultWrapper;
