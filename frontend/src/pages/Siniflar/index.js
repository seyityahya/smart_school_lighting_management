import { useQuery } from "react-query";
import { fetchSiniflarList, updateSinif } from "../../api";
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

const handleChangeTrue = async (sinif_id) => {
  const input = { durum: "true" };
  updateSinif(input, sinif_id);
  window.location.reload();
};
const handleChangeFalse = async (sinif_id) => {
  const input = { durum: "false" };
  updateSinif(input, sinif_id);
  window.location.reload();
};

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
      flexDirection="column"
    >
      <Text marginTop={5} fontSize="4xl">
        Sınıflar
      </Text>
      <SimpleGrid spacing={10} columns={3} mt={5} width={"60%"} mb={10}>
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
                <Button
                  colorScheme={"green"}
                  onClick={() => handleChangeTrue(item._id)}
                >
                  Yak
                </Button>
              ) : (
                <Button
                  colorScheme={"red"}
                  onClick={() => handleChangeFalse(item._id)}
                >
                  Söndür
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Siniflar;
