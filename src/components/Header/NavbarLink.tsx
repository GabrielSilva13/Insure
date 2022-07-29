import { Link, ListItem } from "@chakra-ui/react";
import React from "react";

interface NavbarLinkProps {
  href: string;
  text: string;
}

const NavbarLink = ({ href, text }: NavbarLinkProps) => {
  return (
    <ListItem>
      <Link
        href={href}
        _hover={{
          color: "violet.800",
        }}
      >
        {text}
      </Link>
    </ListItem>
  );
};

export default NavbarLink;
