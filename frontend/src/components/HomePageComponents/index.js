import {
  Flex,
  Card,
  CardHeader,
  Box,
  CardBody,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function HomePageComponents() {
  return (
    <Flex
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Card
        width={"xl"}
        mr={20}
        mb={10}
        mt={10}
        boxShadow="lg"
        rounded="md"
        bg="blackAlpha.100"
        maxH={"50vh"}
        overflow={"hidden"}
      >
        <Link to="/dersprogramı">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading borderBottom={"1px"} size="md">
                    Ders Programı
                  </Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Link>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen. With Chakra UI, I wanted to sync the
            speed of development with the speed of design. I wanted the
            developer to be just as excited as the designer to create a screen.
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen. With Chakra UI, I wanted to sync the
            speed of development with the speed of design. I wanted the
            developer to be just as excited as the designer to create a screen.
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </CardBody>
      </Card>

      {/* second card */}

      <Card
        width={"xl"}
        mb={10}
        mt={10}
        boxShadow="lg"
        rounded="md"
        bg="blackAlpha.100"
        maxH={"50vh"}
      >
        <Link to="/siniflar">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading borderBottom={"1px"} size="md">
                    Sınıflar
                  </Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Link>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen. With Chakra UI, I wanted to sync the
            speed of development with the speed of design. I wanted the
            developer to be just as excited as the designer to create a screen.
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen. With Chakra UI, I wanted to sync the
            speed of development with the speed of design. I wanted the
            developer to be just as excited as the designer to create a screen.
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default HomePageComponents;
