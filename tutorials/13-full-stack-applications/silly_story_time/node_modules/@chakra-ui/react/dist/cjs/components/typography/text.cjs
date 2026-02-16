"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "text"
});
const Text = withContext("p");
const TextPropsProvider = PropsProvider;

exports.Text = Text;
exports.TextPropsProvider = TextPropsProvider;
