import {
  Box,
  Card,
  Text,
  SimpleGrid,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { fetchSiniflarList, updateFiveMinute } from "../../api";

function ErkenIsik() {
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

  const handleOpenFiveMinute = async (sinif_id) => {
    updateFiveMinute(sinif_id);
    window.location.reload();
  };

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
                  onClick={() => handleOpenFiveMinute(item._id)}
                >
                  5 dk
                </Button>
              ) : (
                <Button
                  width="50%"
                  colorScheme={"red"}
                  cursor="not-allowed"
                ></Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ErkenIsik;
