"use strict";
"use client";
import { Field } from '@ark-ui/react/field';
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "input"
});
const Input = withContext(Field.Input);
const InputPropsProvider = PropsProvider;

export { Input, InputPropsProvider };
