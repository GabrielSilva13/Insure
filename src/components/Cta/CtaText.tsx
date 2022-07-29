import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import en from "../../locales/en";
import es from "../../locales/es";
import fr from "../../locales/fr";
import pt from "../../locales/pt";
import it from "../../locales/it";
import { useRouter } from "next/router";

const CtaText = () => {
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "en"
      ? en
      : locale === "es"
      ? es
      : locale === "fr"
      ? fr
      : locale === "pt"
      ? pt
      : it;
  return (
    <Box
      mt={["16", "20", "32"]}
      color="gray.50"
      textAlign={["center", "center", "unset"]}
    >
      <Heading
        fontFamily="heading"
        fontSize={["4xl", "5xl", "5xl", "6xl"]}
        fontWeight="normal"
      >
        {t.hero}
      </Heading>
      <Text maxWidth="560" my="4">
        {t.heroText}
      </Text>
      <Button
        letterSpacing={1}
        colorScheme="violet.800"
        variant="outline"
        px="10"
        py="2"
        textTransform={"uppercase"}
        _hover={{
          color: "violet.800",
          backgroundColor: "gray.50",
        }}
      >
        {t.heroButton}
      </Button>
    </Box>
  );
};

export default CtaText;
