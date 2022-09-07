import { Flex } from "@chakra-ui/react";
import React from "react";
import Product from "../group/Product";

type Props = {};

const Home: React.FC<Props> = ({}) => {
  return (
    <Flex>
      <Product
        href="/product"
        image="https://i.picsum.photos/id/858/200/200.jpg?hmac=G9GRV3ekW4ntHO3WGxZOEAwT5chu9kPdCSt4evx7n6A"
        promotion="sale"
        title="title"
        price={3000}
      />
    </Flex>
  );
};

export default Home;
