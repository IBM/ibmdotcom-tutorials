"use strict";
"use client";
'use strict';

var factory = require('@ark-ui/react/factory');
var fieldset = require('@ark-ui/react/fieldset');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');

const { withProvider, withContext } = createSlotRecipeContext.createSlotRecipeContext({
  key: "fieldset"
});
const FieldsetRoot = withProvider(fieldset.Fieldset.Root, "root");
const FieldsetErrorText = withContext(fieldset.Fieldset.ErrorText, "errorText");
const FieldsetHelperText = withContext(fieldset.Fieldset.HelperText, "helperText");
const FieldsetLegend = withContext(fieldset.Fieldset.Legend, "legend");
const FieldsetContent = withContext(factory.ark.div, "content");
const FieldsetContext = fieldset.Fieldset.Context;

exports.FieldsetContent = FieldsetContent;
exports.FieldsetContext = FieldsetContext;
exports.FieldsetErrorText = FieldsetErrorText;
exports.FieldsetHelperText = FieldsetHelperText;
exports.FieldsetLegend = FieldsetLegend;
exports.FieldsetRoot = FieldsetRoot;
