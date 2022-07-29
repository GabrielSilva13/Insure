import { Heading } from "@chakra-ui/react";
import React from "react";
import en from "../../locales/en";
import es from "../../locales/es";
import fr from "../../locales/fr";
import pt from "../../locales/pt";
import it from "../../locales/it";
import { useRouter } from "next/router";

const CtaFooterTitle = () => {
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
    <Heading
      fontFamily="heading"
      fontSize={["4xl", "4xl", "5xl", "6xl"]}
      fontWeight="normal"
      mb={[10, 10, 0]}
    >
      {t.footerBannerTitle}
    </Heading>
  );
};

export default CtaFooterTitle;
