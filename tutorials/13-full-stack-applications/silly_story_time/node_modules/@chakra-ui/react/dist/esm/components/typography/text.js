"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "text"
});
const Text = withContext("p");
const TextPropsProvider = PropsProvider;

export { Text, TextPropsProvider };
