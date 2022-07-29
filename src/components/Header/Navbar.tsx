import { Button, ListItem, Select, UnorderedList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import en from "../../locales/en";
import es from "../../locales/es";
import fr from "../../locales/fr";
import pt from "../../locales/pt";
import it from "../../locales/it";

import NavbarLink from "./NavbarLink";

const Navbar = () => {
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

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <>
      <UnorderedList
        display={["none", "none", "flex"]}
        gap="5"
        styleType="none"
        textTransform={"uppercase"}
        color={"violet.400"}
        alignItems="center"
        fontWeight="700"
      >
        <NavbarLink href={"#"} text={`${t.navLink1}`} />
        <NavbarLink href={"#"} text={`${t.navLink2}`} />
        <NavbarLink href={"#"} text={`${t.navLink3}`} />

        <ListItem color="violet.800">
          <Button
            letterSpacing={1}
            colorScheme="violet.800"
            variant="outline"
            px="10"
            py="2"
            textTransform={"uppercase"}
            _hover={{
              color: "gray.50",
              backgroundColor: "violet.800",
            }}
          >
            {`${t.navButton}`}
          </Button>
        </ListItem>

        <Select
          w="80px"
          onChange={changeLanguage}
          defaultValue={locale}
          textTransform="uppercase"
        >
          {router.locales?.map((locale: string) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </Select>
      </UnorderedList>
    </>
  );
};

export default Navbar;
