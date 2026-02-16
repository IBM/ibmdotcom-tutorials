"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "kbd"
});
const Kbd = withContext("kbd");
const KbdPropsProvider = PropsProvider;

exports.Kbd = Kbd;
exports.KbdPropsProvider = KbdPropsProvider;
