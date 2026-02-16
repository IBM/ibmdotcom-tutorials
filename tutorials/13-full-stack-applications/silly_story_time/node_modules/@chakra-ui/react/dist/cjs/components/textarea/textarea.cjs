"use strict";
"use client";
'use strict';

var field = require('@ark-ui/react/field');
var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "textarea"
});
const Textarea = withContext(
  field.Field.Textarea
);
const TextareaPropsProvider = PropsProvider;

exports.Textarea = Textarea;
exports.TextareaPropsProvider = TextareaPropsProvider;
