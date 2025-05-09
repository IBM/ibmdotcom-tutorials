"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "link"
});
const Link = withContext("a");
const LinkPropsProvider = PropsProvider;

export { Link, LinkPropsProvider };
