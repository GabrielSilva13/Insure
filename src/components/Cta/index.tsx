import Image from "next/image";
import { Box, Container, Stack } from "@chakra-ui/react";
import React from "react";
import CtaText from "./CtaText";

const Cta = () => {
  return (
    <>
      <Box display={["flex", "flex", "none"]} justifyContent="center">
        <Image
          src="/image-intro-mobile.jpg"
          alt="Happy Family"
          width="375"
          height="451"
        />
      </Box>
      <Box
        as="section"
        bg="hsl(253.84615384615384, 25.49019607843137%, 20%)"
        h="xl"
      >
        <Container maxW="container.xl" position="relative">
          <Box
            w={40}
            h="2px"
            bg={"gray.50"}
            position="relative"
            top="20"
            borderRadius="md"
            display={["none", "none", "flex"]}
          />
          <Stack
            direction={"row"}
            gap="4"
            position="relative"
            overflow="hidden"
            justifyContent={["center", "center", "flex-start"]}
            alignItems={["center", "center", "flex-start"]}
          >
            <CtaText />

            <Box
              position={["unset", "unset", "relative"]}
              top="20"
              display={["none", "none", "flex"]}
            >
              <Image
                src="/image-intro-desktop.jpg"
                alt="Happy Family"
                width={540}
                height="650"
                priority
              />
            </Box>
            <Box
              position="absolute"
              top="-101"
              right="-38"
              display={["none", "none", "flex", "flex", "flex", "none"]}
            >
              <Image
                src="/bg-pattern-intro-right-desktop.svg"
                alt="Imagem de fundo com ondas ilustrativa"
                width="436"
                height={593}
              />
            </Box>
          </Stack>
          <Box
            position="absolute"
            bottom="-249"
            left="-86"
            display={["none", "none", "flex", "flex", "flex", "none"]}
          >
            <Image
              src="/bg-pattern-intro-left-desktop.svg"
              alt="Imagem de fundo com ondas ilustrativa"
              width={195}
              height={504}
            />
          </Box>
          <Box
            position="absolute"
            top="0"
            left="-7"
            display={["flex", "flex", "none", "none", "none", "none"]}
          >
            <Image
              src="/bg-pattern-intro-left-mobile.svg"
              alt="Imagem de fundo com ondas ilustrativa"
              width={168}
              height={165}
            />
          </Box>
          <Box
            position="absolute"
            bottom="-399"
            right="1"
            display={["flex", "flex", "none", "none", "none", "none"]}
          >
            <Image
              src="/bg-pattern-intro-right-mobile.svg"
              alt="Imagem de fundo com ondas ilustrativa"
              width={124}
              height={330}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Cta;
