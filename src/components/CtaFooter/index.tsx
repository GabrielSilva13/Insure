import { Image, Box, Container, Stack } from "@chakra-ui/react";
import React from "react";
import CtaFooterButton from "./CtaFooterButton";
import CtaFooterTitle from "./CtaFooterTitle";

const CtaFooter = () => {
  return (
    <Box as="section" textAlign={["center", "center", "unset"]}>
      <Container maxW="container.xl" mt={["40", "40", "72"]}>
        <Stack
          direction={["column", "column", "row"]}
          justify="space-between"
          align="center"
          bg="hsl(253.84615384615384, 25.49019607843137%, 20%)"
          color="gray.50"
          px={[8, 10, "20"]}
          py="10"
          position="relative"
          overflow="hidden"
        >
          <CtaFooterTitle />
          <CtaFooterButton />
          <Image
            src="/bg-pattern-how-we-work-mobile.svg"
            position="absolute"
            right="0"
            top="0"
            display={["flex", "flex", "none", "none", "none", "none"]}
            alt="imagem decorativa de ondas"
          />
          <Image
            src="/bg-pattern-how-we-work-desktop.svg"
            position="absolute"
            right="0"
            top="0"
            display={["none", "none", "flex", "flex", "flex", "none"]}
            alt="imagem decorativa de ondas"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default CtaFooter;
