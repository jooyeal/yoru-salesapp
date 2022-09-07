import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  image: string;
  promotion?: string;
  title: string;
  price: number;
};

const Product: React.FC<Props> = ({ href, image, promotion, title, price }) => {
  return (
    <Link href={href}>
      <Box
        cursor="pointer"
        shadow="base"
        rounded="md"
        transition="all 100ms ease-in"
        _hover={{ opacity: "0.95" }}
      >
        <Box>
          <Box>
            <Image
              className="rounded-t-md"
              src={image}
              width={200}
              height={200}
            />
          </Box>
        </Box>
        <Box p="2" roundedBottom="md">
          <Flex justifyContent="flex-end" h="5">
            <Badge colorScheme="red">{promotion}</Badge>
          </Flex>
          <Flex flexDirection="column">
            <Text as="b">{title}</Text>
            <Text>$ {price}</Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default Product;
