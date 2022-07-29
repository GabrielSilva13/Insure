import { Box, Container, Heading, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import en from "../../locales/en";
import es from "../../locales/es";
import fr from "../../locales/fr";
import pt from "../../locales/pt";
import it from "../../locales/it";
import QualityCard from "./QualityCard";

const Quality = () => {
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
    <Box as="section">
      <Container maxW="container.xl" mt={["40", "40", "72"]}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={["center", "center", "flex-start"]}
        >
          <Box
            w={40}
            h="2px"
            bg={"violet.400"}
            position="relative"
            bottom={[10, 10, "14"]}
            borderRadius="md"
            display={["flex"]}
          />
          <Heading
            fontFamily="heading"
            mb="20"
            fontSize={["4xl", "5xl", "5xl", "6xl"]}
            textAlign={["center", "center", "left"]}
          >
            {t.qualityTitle}
          </Heading>
        </Box>

        <Flex
          justify="space-between"
          align="center"
          flexDirection={["column", "column", "row"]}
          gap="4"
        >
          <QualityCard
            title={t.firstQualitySingleTitle}
            description={t.firstQualitySingleDescription}
            image={"/icon-snappy-process.svg"}
          />
          <QualityCard
            title={t.secondQualitySingleTitle}
            description={t.secondQualitySingleDescription}
            image={"/icon-affordable-prices.svg"}
          />
          <QualityCard
            title={t.thirdQualitySingleTitle}
            description={t.thirdQualitySingleDescription}
            image={"/icon-people-first.svg"}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Quality;
