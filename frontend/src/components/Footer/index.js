import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import styles from "./style.module.css";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.first}>
        <Box>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading pb={3} size="sm">
                  İstatistikler
                </Heading>
              </Box>
            </Flex>
          </Flex>
          <Box display={"flex"} alignItems={"center"} marginBottom={4}>
            <Text>Derslik Sayısı : </Text>
            <Text>10</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} marginBottom={4}>
            <Text>Öğretmen Sayısı : </Text>
            <Text>13</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Text>Öğrenci Sayısı </Text>
            <Text>285</Text>
          </Box>
        </Box>
      </div>
      <div className={styles.second}>
        <Box>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading pb={3} size="sm">
                  İletişim
                </Heading>
              </Box>
            </Flex>
          </Flex>
          <Box display={"flex"} alignItems={"center"} marginBottom={4}>
            <Text>Telefon : </Text>
            <Text>02126298169</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} marginBottom={4}>
            <Text>E-posta : </Text>
            <Text>düzce-ilkokulu@gmail.com</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Text>Adres : </Text>
            <Text>Düzce Konuralp yerleşkesi</Text>
          </Box>
        </Box>
      </div>
      <div className={styles.third}>
        <Box>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading pb={5} size="sm">
                  Sosyal Medya
                </Heading>
                <Flex>
                  <Box ml={2} mr={5}>
                    <GrFacebook />
                  </Box>
                  <Box mr={5}>
                    <GrInstagram />
                  </Box>
                  <Box>
                    <GrTwitter />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
