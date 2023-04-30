import {
  Flex,
  Card,
  CardHeader,
  Box,
  CardBody,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSiniflarList } from "../../api";

function HomePageComponents() {
  const { isLoading, isError, data, error } = useQuery(
    "siniflar",
    fetchSiniflarList
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }

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
        overflow={"hidden"}
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
        <CardBody paddingTop={0}>
          <SimpleGrid spacing={5} columns={3} mt={5} mb={10}>
            {data.map((item) => (
              <Card key={item._id} maxW={350} bg="blackAlpha.100">
                <CardHeader pt={2} pb={3}>
                  <Heading
                    pb={0}
                    size="sm"
                    display={"flex"}
                    justifyContent="center"
                  >
                    {item.sinif}
                  </Heading>
                </CardHeader>
                <CardBody paddingTop={1} paddingBottom={1}>
                  {!item.durum ? (
                    <Text
                      bg={"red.600"}
                      display="flex"
                      justifyContent={"center"}
                      borderRadius={"20px"}
                      color={"white"}
                    >
                      Yanmıyor
                    </Text>
                  ) : (
                    <Text
                      bg={"green.600"}
                      display="flex"
                      justifyContent={"center"}
                      borderRadius="20px"
                      color={"white"}
                    >
                      Yanıyor
                    </Text>
                  )}
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default HomePageComponents;
