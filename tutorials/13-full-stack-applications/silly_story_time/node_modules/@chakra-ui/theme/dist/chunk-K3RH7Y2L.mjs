import {
  badgeTheme,
  vars
} from "./chunk-ZQMLTFF3.mjs";

// src/components/code.ts
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
var { variants, defaultProps } = badgeTheme;
var baseStyle = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var codeTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps
});

export {
  codeTheme
};
//# sourceMappingURL=chunk-K3RH7Y2L.mjs.map