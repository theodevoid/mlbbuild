import { config } from "./config";
import { colors } from "./colors";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors,
  config,
});
