"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "mark"
});
const Mark = withContext("mark");
const MarkPropsProvider = PropsProvider;

export { Mark, MarkPropsProvider };
