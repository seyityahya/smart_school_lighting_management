import { Flex } from "@chakra-ui/react";
import React from "react";
import HomePageSiniflar from "./HomePageSiniflar";
import HomePageDersler from "./HomePageDersler";

function HomePageComponents() {
  return (
    <Flex
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <HomePageDersler />
      <HomePageSiniflar />
    </Flex>
  );
}

export default HomePageComponents;
