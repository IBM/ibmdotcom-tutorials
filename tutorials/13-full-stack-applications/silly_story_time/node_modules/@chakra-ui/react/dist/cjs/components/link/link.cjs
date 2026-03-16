"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "link"
});
const Link = withContext("a");
const LinkPropsProvider = PropsProvider;

exports.Link = Link;
exports.LinkPropsProvider = LinkPropsProvider;
