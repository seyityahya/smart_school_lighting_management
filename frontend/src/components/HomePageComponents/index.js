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
      <Link to="/dersprogramı">
        <Card
          width={"lg"}
          mr={20}
          mb={10}
          mt={10}
          boxShadow="lg"
          rounded="md"
          bg="blackAlpha.100"
        >
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
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
        </Card>
      </Link>

      {/* second card */}

      <Link to="/siniflar">
        <Card
          width={"lg"}
          mb={10}
          mt={10}
          boxShadow="lg"
          rounded="md"
          bg="blackAlpha.100"
        >
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
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
        </Card>
      </Link>

      {/* Third Card */}

      <Card
        width={"lg"}
        mr={20}
        boxShadow="lg"
        rounded="md"
        bg="blackAlpha.100"
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading borderBottom={"1px"} size="md">
                  İstatistikler
                </Heading>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Box display={"flex"} alignItems={"center"}>
            <Heading size="sm">Derslik Sayısı : </Heading>
            <Text>10</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Heading size="sm">Öğretmen Sayısı : </Heading>
            <Text>14</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Heading size="sm">Öğrenci Sayısı : </Heading>
            <Text>285</Text>
          </Box>
        </CardBody>
      </Card>

      {/* 4. card */}

      <Card width={"lg"} boxShadow="lg" rounded="md" bg="blackAlpha.100">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading borderBottom={"1px"} size="md">
                  İletişim
                </Heading>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Box display={"flex"} alignItems={"center"}>
            <Heading size="sm">Telefon : </Heading>
            <Text>02126298169</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Heading size="sm">E-posta : </Heading>
            <Text>düzce-i-ö-o@gmail.com</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Heading size="sm">Adres : </Heading>
            <Text>Düzce Konuralp yerleşkesi</Text>
          </Box>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default HomePageComponents;
