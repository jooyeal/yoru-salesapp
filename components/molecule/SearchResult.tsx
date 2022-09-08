import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
}

const SearchResult: React.FC<Props> = ({ href }) => {
  return (
    <Link href={href}>
      <a>
        <Box
          p={2}
          w="full"
          borderBottom="1px"
          borderColor="gray.100"
          _hover={{ backgroundColor: "gray.100" }}
        >
          SearchResult
        </Box>
      </a>
    </Link>
  );
};

export default SearchResult;
