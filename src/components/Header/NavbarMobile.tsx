import {
  Box,
  Link,
  ListItem,
  UnorderedList,
  Button,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import en from "../../locales/en";
import es from "../../locales/es";
import fr from "../../locales/fr";
import pt from "../../locales/pt";
import it from "../../locales/it";

const NavbarMobile = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const color = useColorModeValue("violet.100", "#fff");

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (modalIsOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalIsOpen]);

  return (
    <>
      {modalIsOpen === true ? (
        <Box display={["flex", "flex", "none"]} zIndex="999">
          <button type="button" onClick={closeModal}>
            <Image
              src="/icon-close.svg"
              alt="Icone que fecha o menu"
              width="30.5"
              height="30.5"
            />
          </button>
        </Box>
      ) : (
        <Box display={["flex", "flex", "none"]}>
          <button type="button" onClick={openModal}>
            <Image
              src="/icon-hamburger.svg"
              alt="Icone que abre o menu"
              width="30.5"
              height="30.5"
            />
          </button>
        </Box>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        contentLabel="Menu Mobile"
        ariaHideApp={false}
      >
        <UnorderedList
          display={["flex"]}
          flexDirection="column"
          gap="5"
          styleType="none"
          textTransform={"uppercase"}
          color={"gray.50"}
          alignItems="center"
          fontWeight="700"
          justifyContent="center"
        >
          <ListItem>
            <Link href="#">{t.navLink1}</Link>
          </ListItem>
          <ListItem>
            <Link href="#">{t.navLink2}</Link>
          </ListItem>
          <ListItem>
            <Link href="#">{t.navLink3}</Link>
          </ListItem>
          <ListItem color="gray.50">
            <Button
              letterSpacing={1}
              colorScheme="gray.50"
              variant="outline"
              px="10"
              py="2"
              textTransform={"uppercase"}
            >
              {t.navButton}
            </Button>
          </ListItem>

          <Select
            maxW="190px"
            onChange={changeLanguage}
            defaultValue={locale}
            textTransform="uppercase"
            colorScheme="violet.800"
            color="violet.800"
            bg={color}
          >
            {router.locales?.map((locale: string) => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </Select>
          <Image
            src="/bg-pattern-mobile-nav.svg"
            alt="Patternmobile"
            style={{ position: "relative", top: "154px" }}
            width="375"
            height={"218"}
          />
        </UnorderedList>
      </Modal>
    </>
  );
};

export default NavbarMobile;
