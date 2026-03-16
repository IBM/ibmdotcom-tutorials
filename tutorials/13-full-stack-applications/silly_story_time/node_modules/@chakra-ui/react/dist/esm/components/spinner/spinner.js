"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "spinner"
});
const Spinner = withContext("span");
const SpinnerPropsProvider = PropsProvider;

export { Spinner, SpinnerPropsProvider };
