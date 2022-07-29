import { Box, Link, Image } from "@chakra-ui/react";
import React from "react";

const FooterIcons = () => {
  return (
    <Box display="flex" flexDirection="row" gap="4" alignItems="center">
      <Link href="#">
        <Image
          src="/icon-facebook.svg"
          _hover={{
            filter: "brightness(10%)",
            transition: "filter 0.2s",
          }}
          alt="Icone Facebook"
          width={"24px"}
          height={"24px"}
        />
      </Link>
      <Link href="#">
        <Image
          src="/icon-twitter.svg"
          _hover={{
            filter: "brightness(10%)",
            transition: "filter 0.2s",
          }}
          alt="Icone Twitter"
          width={"24px"}
          height={"24px"}
        />
      </Link>
      <Link href="#">
        <Image
          src="/icon-pinterest.svg"
          _hover={{
            filter: "brightness(10%)",
            transition: "filter 0.2s",
          }}
          alt="Icone Pinterest"
          width={"24px"}
          height={"24px"}
        />
      </Link>
      <Link href="#">
        <Image
          src="/icon-instagram.svg"
          _hover={{
            filter: "brightness(10%)",
            transition: "filter 0.2s",
          }}
          alt="Icone Instagram"
          width={"24px"}
          height={"24px"}
        />
      </Link>
    </Box>
  );
};

export default FooterIcons;
