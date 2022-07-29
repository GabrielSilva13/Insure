import { Box, Link, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import React from "react";

type footerLinksData = {
  firstLink: string;
  secondLink: string;
  thirdLink: string;
  fourthLink: string;
};

interface FooterLinksProps {
  title: string;
  links: {
    href: string;
  };
  footerLinks: footerLinksData;
}

const FooterLinks = ({ title, links, footerLinks }: FooterLinksProps) => {
  return (
    <>
      <Box textTransform={"uppercase"} fontWeight="700" mb={[8, 8, 0]}>
        <UnorderedList
          styleType="none"
          color="violet.800"
          margin="0"
          gap="2"
          display="flex"
          flexDirection="column"
        >
          <Text as="strong" color={"violet.400"} display="block" mb="4">
            {title}
          </Text>
          <ListItem>
            <Link
              href={links.href}
              _hover={{
                textDecoration: "underline",
              }}
            >
              {footerLinks.firstLink}
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={links.href}
              _hover={{
                textDecoration: "underline",
              }}
            >
              {footerLinks.secondLink}
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={links.href}
              _hover={{
                textDecoration: "underline",
              }}
            >
              {footerLinks.thirdLink}
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={links.href}
              _hover={{
                textDecoration: "underline",
              }}
            >
              {footerLinks.fourthLink}
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default FooterLinks;
