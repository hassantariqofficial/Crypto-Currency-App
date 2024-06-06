import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

export const theme = extendTheme({
  color: {
    p: {
      orange: "#5F00D9",
      black: "#171717",
    },
    black: {
      5: "#F3F3F7",
      10: "#EEEEF4",
      20: "#D8DDE2",
      40: "#BABAC4",
      60: "#797E82",
      80: "#5353D66",
    },
  },
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
  global: {
    // styles for the `body`
    body: {
      bg: "black",
      color: "white",
    },
  },
});
