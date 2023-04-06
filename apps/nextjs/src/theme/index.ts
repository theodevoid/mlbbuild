import { fonts } from "./font";
import { config } from "./config";
import { colors } from "./colors";
import { extendTheme, ThemeOverride } from "@chakra-ui/react";

export const theme: ThemeOverride = extendTheme({
  ...fonts,
  ...colors,
  ...config,
});
