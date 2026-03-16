"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');
var badge = require('./badge.cjs');

const { variants, defaultVariants } = badge.badgeRecipe;
const codeRecipe = config.defineRecipe({
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

exports.codeRecipe = codeRecipe;
