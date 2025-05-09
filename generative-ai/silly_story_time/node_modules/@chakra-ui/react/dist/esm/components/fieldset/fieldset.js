"use strict";
"use client";
import { ark } from '@ark-ui/react/factory';
import { Fieldset } from '@ark-ui/react/fieldset';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';

const { withProvider, withContext } = createSlotRecipeContext({
  key: "fieldset"
});
const FieldsetRoot = withProvider(Fieldset.Root, "root");
const FieldsetErrorText = withContext(Fieldset.ErrorText, "errorText");
const FieldsetHelperText = withContext(Fieldset.HelperText, "helperText");
const FieldsetLegend = withContext(Fieldset.Legend, "legend");
const FieldsetContent = withContext(ark.div, "content");
const FieldsetContext = Fieldset.Context;

export { FieldsetContent, FieldsetContext, FieldsetErrorText, FieldsetHelperText, FieldsetLegend, FieldsetRoot };
