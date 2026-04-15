"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "code"
});
const Code = withContext("code");
const CodePropsProvider = PropsProvider;

export { Code, CodePropsProvider };
