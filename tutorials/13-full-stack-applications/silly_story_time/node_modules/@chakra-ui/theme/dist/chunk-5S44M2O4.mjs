// src/components/divider.ts
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
var baseStyle = defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid = defineStyle({
  borderStyle: "solid"
});
var variantDashed = defineStyle({
  borderStyle: "dashed"
});
var variants = {
  solid: variantSolid,
  dashed: variantDashed
};
var dividerTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "solid"
  }
});

export {
  dividerTheme
};
//# sourceMappingURL=chunk-5S44M2O4.mjs.map