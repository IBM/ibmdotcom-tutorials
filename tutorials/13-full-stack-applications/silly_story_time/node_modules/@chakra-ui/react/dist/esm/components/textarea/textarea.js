"use strict";
"use client";
import { Field } from '@ark-ui/react/field';
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "textarea"
});
const Textarea = withContext(
  Field.Textarea
);
const TextareaPropsProvider = PropsProvider;

export { Textarea, TextareaPropsProvider };
