"use strict";
import { defineConfig } from '../styled-system/config.js';
import { breakpoints } from './breakpoints.js';
import { globalCss } from './global-css.js';
import { layerStyles } from './layer-styles.js';
import { animationStyles } from './motion-styles.js';
import { recipes } from './recipes.js';
import { semanticColors } from './semantic-tokens/colors.js';
import { semanticRadii } from './semantic-tokens/radii.js';
import { semanticShadows } from './semantic-tokens/shadows.js';
import { slotRecipes } from './slot-recipes.js';
import { textStyles } from './text-styles.js';
import { animations } from './tokens/animations.js';
import { aspectRatios } from './tokens/aspect-ratios.js';
import { blurs } from './tokens/blurs.js';
import { borders } from './tokens/borders.js';
import { colors } from './tokens/colors.js';
import { cursor } from './tokens/cursor.js';
import { durations } from './tokens/durations.js';
import { easings } from './tokens/easings.js';
import { fontSizes } from './tokens/font-sizes.js';
import { fontWeights } from './tokens/font-weights.js';
import { fonts } from './tokens/fonts.js';
import { keyframes } from './tokens/keyframes.js';
import { letterSpacings } from './tokens/letter-spacing.js';
import { lineHeights } from './tokens/line-heights.js';
import { radii } from './tokens/radius.js';
import { sizes } from './tokens/sizes.js';
import { spacing } from './tokens/spacing.js';
import { zIndices } from './tokens/z-indices.js';

const defaultThemeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "chakra",
  cssVarsRoot: ":where(html, .chakra-theme)",
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens: {
      aspectRatios,
      animations,
      blurs,
      borders,
      colors,
      durations,
      easings,
      fonts,
      fontSizes,
      fontWeights,
      letterSpacings,
      lineHeights,
      radii,
      spacing,
      sizes,
      zIndex: zIndices,
      cursor
    },
    semanticTokens: {
      colors: semanticColors,
      shadows: semanticShadows,
      radii: semanticRadii
    },
    recipes,
    slotRecipes,
    textStyles,
    layerStyles,
    animationStyles
  }
});

export { defaultThemeConfig };
