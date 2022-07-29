import { Flex, Container } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const Header = () => {
  return (
    <Container
      as="header"
      maxW="container.xl"
      py="5"
      zIndex="9999"
      position={"relative"}
    >
      <Flex justify="space-between" align="center">
        <Image src="/logo.svg" alt="Logo da insure" width="112" height="18" />

        <NavbarMobile />
        <Navbar />
      </Flex>
    </Container>
  );
};

export default Header;
