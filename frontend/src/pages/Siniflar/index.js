import React from "react";
import { useQuery } from "react-query";
import { fetchSiniflarList } from "../../api";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

function Siniflar() {
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
    <Box
      width="100%"
      display="flex"
      alignItems={"center"}
      justifyContent="center"
    >
      <SimpleGrid spacing={10} columns={3} mt={10} width={"60%"}>
        {data.map((item) => (
          <Card key={item._id} maxW={350} bg="blackAlpha.100">
            <CardHeader>
              <Heading size="md">{item.sinif}</Heading>
            </CardHeader>
            <CardBody>
              {!item.durum ? <Text>Yanmıyor</Text> : <Text>Yanıyor</Text>}
            </CardBody>
            <CardFooter>
              {!item.durum ? (
                <Button colorScheme={"green"}>Yak</Button>
              ) : (
                <Button colorScheme={"red"}>Söndür</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Siniflar;
