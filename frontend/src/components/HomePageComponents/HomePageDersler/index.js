import React from "react";
import {
  Flex,
  Card,
  CardHeader,
  Box,
  CardBody,
  Heading,
  Td,
  Tr,
  Th,
  Table,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchDerslerList } from "../../../api";

function HomePageDersler() {
  const { isLoading, isError, data, error } = useQuery(
    "dersler",
    fetchDerslerList
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }

  return (
    <Card
      width={"xl"}
      mr={20}
      mb={10}
      mt={10}
      boxShadow="lg"
      rounded="md"
      bg="blackAlpha.100"
      height={"50vh"}
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
        <Table>
          <Thead>
            <Tr>
              <Th>DERS</Th>
              <Th>SAAT</Th>
              <Th>DEĞİŞTİREN</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr> */}
            {data.map((item) => (
              <Tr key={item._id}>
                <Td>{item.ders}.ders</Td>
                <Td>
                  {item.baslangic} - {item.bitis}
                </Td>
                <Td>{item.degistiren}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default HomePageDersler;
