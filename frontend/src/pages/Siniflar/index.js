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

  const filteredData = data.filter(
    (item) => item._id !== "645ccd504c4e0531b8b3804f"
  );
  const koridor = data.find((item) => item._id === "645ccd504c4e0531b8b3804f");

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

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        width={"60%"}
        height="200px"
        display="flex"
        alignItems="center"
        bg="blackAlpha.100"
        boxShadow="lg"
        pl={"60px"}
        pr={"60px"}
        mt={5}
        mb={5}
      >
        <CardHeader>
          <Heading display="flex" size="md">
            KORİDOR
          </Heading>
        </CardHeader>
        <CardBody>
          {!koridor.durum ? (
            <Box display={"flex"} justifyContent="center" marginTop={5}>
              <div className="sonen-isik">
                <span></span>
                <span></span>
              </div>
            </Box>
          ) : (
            <Box display={"flex"} justifyContent="center" marginTop={5}>
              <div className="yanan-isik">
                <span></span>
                <span></span>
              </div>
            </Box>
          )}
        </CardBody>
        <CardFooter display="flex" justifyContent="center">
          {!koridor.durum ? (
            <Button
              width="100px"
              colorScheme={"green"}
              onClick={() => handleChangeTrue(koridor._id)}
            >
              Yak
            </Button>
          ) : (
            <Button
              width="100px"
              colorScheme={"red"}
              onClick={() => handleChangeFalse(koridor._id)}
            >
              Söndür
            </Button>
          )}
        </CardFooter>
      </Card>

      <SimpleGrid spacing={10} columns={3} mt={5} width={"60%"} mb={10}>
        {filteredData.map((item) => (
          <Card key={item._id} maxW={350} bg="blackAlpha.100" boxShadow="lg">
            <CardHeader>
              <Heading display="flex" justifyContent="center" size="md">
                {item.sinif}
              </Heading>
            </CardHeader>
            <CardBody>
              {!item.durum ? (
                <Box display={"flex"} justifyContent="center" marginTop={5}>
                  <div className="sonen-isik">
                    <span></span>
                    <span></span>
                  </div>
                </Box>
              ) : (
                <Box display={"flex"} justifyContent="center" marginTop={5}>
                  <div className="yanan-isik">
                    <span></span>
                    <span></span>
                  </div>
                </Box>
              )}
            </CardBody>
            <CardFooter display="flex" justifyContent="center">
              {!item.durum ? (
                <Button
                  width="50%"
                  colorScheme={"green"}
                  onClick={() => handleChangeTrue(item._id)}
                >
                  Yak
                </Button>
              ) : (
                <Button
                  width="50%"
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
