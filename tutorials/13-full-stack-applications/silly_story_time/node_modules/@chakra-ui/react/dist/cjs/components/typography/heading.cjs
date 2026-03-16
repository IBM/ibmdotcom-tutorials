"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "heading"
});
const Heading = withContext("h2");
const HeadingPropsProvider = PropsProvider;

exports.Heading = Heading;
exports.HeadingPropsProvider = HeadingPropsProvider;
