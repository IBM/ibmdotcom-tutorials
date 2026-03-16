"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "container"
});
const Container = withContext("div");
const ContainerPropsProvider = PropsProvider;

export { Container, ContainerPropsProvider };
