"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "kbd"
});
const Kbd = withContext("kbd");
const KbdPropsProvider = PropsProvider;

export { Kbd, KbdPropsProvider };
