"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "code"
});
const Code = withContext("code");
const CodePropsProvider = PropsProvider;

exports.Code = Code;
exports.CodePropsProvider = CodePropsProvider;
