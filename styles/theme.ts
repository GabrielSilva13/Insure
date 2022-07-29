import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "hsl(0, 0%, 98%)",
    },
    violet: {
      400: "hsl(273, 4%, 51%)",
      500: "hsl(256, 26%, 20%)",
      800: "hsl(270, 9%, 17%)",
    },
    blue: {
      300: "hsl(216, 30%, 68%)",
    },
  },
  fonts: {
    body: "Karla, sans-serif",
    heading: "DM Serif Display, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "body",
      },
    }),
  },
});
