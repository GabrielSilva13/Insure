import { Box, Image, Container, Flex } from "@chakra-ui/react";
import React from "react";
import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";
import en from "../../locales/en";
import es from "../../locales/es";
import fr from "../../locales/fr";
import pt from "../../locales/pt";
import it from "../../locales/it";
import { useRouter } from "next/router";

const Footer = () => {
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
    <Box as="footer" px={[8, 10, "20"]}>
      <Container maxW="container.xl" mt={["40", "40", "72"]}>
        <Flex
          justifyContent="space-between"
          align="center"
          flexDirection={["column", "column", "row"]}
          gap="8"
          pt="8"
        >
          <Image src="/logo.svg" alt="logo da insure" width="112" height="18" />
          <FooterIcons />
        </Flex>
        <Box w={"full"} h="2px" bg={"violet.400"} my="10" borderRadius="md" />

        <Flex
          justifyContent="space-between"
          flexDirection={["column", "column", "row"]}
          align={["center", "center", "baseline"]}
          textAlign={["center", "center", "justify"]}
          position="relative"
        >
          <Image
            pointerEvents={"none"}
            src="/bg-pattern-footer-desktop.svg"
            position="absolute"
            left="-98"
            top="-146"
            display={["none", "none", "flex", "flex", "flex", "none"]}
            alt="imagem decorativa de ondas"
            width={528}
            height={231}
          />

          <Image
            pointerEvents={"none"}
            src="/bg-pattern-footer-mobile.svg"
            position="absolute"
            left="-49"
            top="-188"
            display={["flex", "flex", "none", "none", "none", "none"]}
            alt="imagem decorativa de ondas"
            width={374}
            height={173}
          />

          <FooterLinks
            title={t.firstfooterLinkSingleTitle}
            links={{
              href: "#",
            }}
            footerLinks={{
              firstLink: `${t.firstfooterLink1}`,
              secondLink: `${t.firstfooterLink2}`,
              thirdLink: `${t.firstfooterLink3}`,
              fourthLink: `${t.firstfooterLink4}`,
            }}
          />

          <FooterLinks
            title={t.secondfooterLinkSingleTitle}
            links={{
              href: "#",
            }}
            footerLinks={{
              firstLink: `${t.secondfooterLink1}`,
              secondLink: `${t.secondfooterLink2}`,
              thirdLink: `${t.secondfooterLink3}`,
              fourthLink: `${t.secondfooterLink4}`,
            }}
          />

          <FooterLinks
            title={t.thirdfooterLinkSingleTitle}
            links={{
              href: "#",
            }}
            footerLinks={{
              firstLink: `${t.thirdfooterLink1}`,
              secondLink: `${t.thirdfooterLink2}`,
              thirdLink: `${t.thirdfooterLink3}`,
              fourthLink: "",
            }}
          />

          <FooterLinks
            title={t.fourthfooterLinkSingleTitle}
            links={{
              href: "#",
            }}
            footerLinks={{
              firstLink: `${t.fourthfooterLink1}`,
              secondLink: `${t.fourthfooterLink2}`,
              thirdLink: `${t.fourthfooterLink3}`,
              fourthLink: "",
            }}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
