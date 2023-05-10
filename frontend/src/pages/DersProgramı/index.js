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
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchDerslerList, fetchDersDelete, fetchSystemStart } from "../../api";
import NewDers from "./NewDers";

const systemActive = async () => {
  fetchSystemStart();
};

const dersDelete = async (ders_id) => {
  fetchDersDelete(ders_id);
  window.location.reload();
};

function DersProgramı() {
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
    <>
      <Flex
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Card
          width={"auto"}
          mb={10}
          mt={10}
          boxShadow="lg"
          rounded="md"
          bg="blackAlpha.100"
          overflow={"hidden"}
          mr={20}
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
                {data.map((item) => (
                  <Tr key={item._id}>
                    <Td>{item.ders}.ders</Td>
                    <Td>
                      {item.baslangic} - {item.bitis}
                    </Td>
                    <Td>{item.degistiren}</Td>
                    <Button
                      ml={10}
                      width="80px"
                      colorScheme={"red"}
                      onClick={() => dersDelete(item._id)}
                    >
                      Sil
                    </Button>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
        <NewDers />
      </Flex>
      <Box
        width={"100%"}
        display="flex"
        justifyContent={"center"}
        mt={20}
        mb={20}
      >
        <Button onClick={systemActive}>Sistemi Aç</Button>
      </Box>
    </>
  );
}

export default DersProgramı;
