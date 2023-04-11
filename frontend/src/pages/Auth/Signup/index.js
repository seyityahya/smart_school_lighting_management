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

function Signup() {
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Kayıt Ol</Heading>
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

            <FormControl mt="4">
              <FormLabel>Şifre Tekrar</FormLabel>
              <Input name="passwordConfirm" type="password" />
            </FormControl>

            <Button mt="4" width="full" type="submit">
              Kayıt Ol
            </Button>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signup;
