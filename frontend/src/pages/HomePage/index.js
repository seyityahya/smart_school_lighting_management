import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";

function HomePage() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
        <Text fontSize="4xl">Düzce İlköğretim Okulu</Text>
        <Text mt={10} fontSize="xl" width="700px">
          Bu site üzerinden Düzce İlköğretim okulunun ışıklarını kontrol
          edebilir. Okulun Ders Porgramını Girebilir. Ya da düzenleyebilirsin.
          Aynı zamanda istediğin sınıfın ışıklarını kontrol dilebiiğin gibi
          kontrrol edebilirsin. Bunları Yapabilmen için giriş yapmalısın
        </Text>
        <Text mt={10} fontSize="2xl">
          Giriş Yapmak Zorunludur.
        </Text>

        <Box mt={10}>
          <Link to="/signin">
            <Button mr={5} colorScheme="whatsapp">
              Giriş Yap
            </Button>
          </Link>
          <Link to="/signup">
            <Button colorScheme="facebook">Kayıt Ol</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default HomePage;
