"use strict";
import { defineRecipe } from '../../styled-system/config.js';
import { badgeRecipe } from './badge.js';

const { variants, defaultVariants } = badgeRecipe;
const codeRecipe = defineRecipe({
  className: "chakra-code",
  base: {
    fontFamily: "mono",
    alignItems: "center",
    display: "inline-flex",
    borderRadius: "l2"
  },
  variants,
  defaultVariants
});

export { codeRecipe };
