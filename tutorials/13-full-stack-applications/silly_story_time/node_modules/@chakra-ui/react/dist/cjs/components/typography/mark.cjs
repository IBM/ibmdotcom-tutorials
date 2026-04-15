"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "mark"
});
const Mark = withContext("mark");
const MarkPropsProvider = PropsProvider;

exports.Mark = Mark;
exports.MarkPropsProvider = MarkPropsProvider;
