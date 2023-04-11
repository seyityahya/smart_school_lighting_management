import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

function Signin() {
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Giriş Yap</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input name="email" />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Şifre</FormLabel>
              <Input name="password" type="password" />
            </FormControl>

            <Button mt="4" width="full" type="submit">
              Giriş Yap
            </Button>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signin;
