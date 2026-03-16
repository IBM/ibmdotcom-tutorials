"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "heading"
});
const Heading = withContext("h2");
const HeadingPropsProvider = PropsProvider;

export { Heading, HeadingPropsProvider };
