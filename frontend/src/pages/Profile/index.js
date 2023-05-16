import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Text,
  Button,
  Alert,
  AlertIcon,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import avatar from "../../photo/avatar.png";

function Profile() {
  const { user, logout, loggedIn } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <div>
      {loggedIn === false && (
        <>
          <Alert status="warning">
            <AlertIcon />
            You are not logged in. please login and try again.
          </Alert>
          <Link to="/signin">
            <Button mt={4} colorScheme="whatsapp" variant="solid">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button mt={4} ml={4} colorScheme="facebook" variant="solid">
              Register
            </Button>
          </Link>
        </>
      )}
      {loggedIn === true && (
        <Box width="100%" display="flex" justifyContent="center" mt="30px">
          <Card maxW="md" width="100%" display="flex" justifyContent="center">
            <CardBody
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Box display="flex" justifyContent="center">
                <Image
                  width="200px"
                  display="flex"
                  justifyContent="center"
                  src={avatar}
                  alt="Green double couch with wooden legs"
                  objectFit="cover"
                  opacity="0.5"
                  borderRadius="50%"
                />
              </Box>
              <Stack mt="10" spacing="3">
                <Heading
                  display="flex"
                  justifyContent="center"
                  size="md"
                  mt="5"
                  mb="5"
                >
                  {user.email}
                </Heading>
                <Box display="flex" justifyContent="center">
                  <Heading color="blue.500" size="sm">
                    Kullanıcı Yetkisi :
                  </Heading>
                  <Heading ml="5px" size="sm">
                    {user.role === "admin" ? (
                      <Text>Yetkili</Text>
                    ) : (
                      <Text>Kullanıcı</Text>
                    )}
                  </Heading>
                </Box>
                <Text width="100%" display="flex" justifyContent="center">
                  Eğer rolünüz yetkili değilse sistem yöneticisinden yetki talep
                  edebilirsiniz. Yetkili olmayan kullanıcılar ışıkları kontrol
                  edemezler sadece gözlemleyebilirler.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter display="flex" justifyContent="center">
              <Button
                width="40%"
                onClick={handleLogout}
                variant="solid"
                colorScheme="blue"
              >
                Çıkış Yap
              </Button>
            </CardFooter>
          </Card>
        </Box>
      )}
    </div>
  );
}

export default Profile;
