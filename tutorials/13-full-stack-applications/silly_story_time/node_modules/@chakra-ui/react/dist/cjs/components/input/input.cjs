"use strict";
"use client";
'use strict';

var field = require('@ark-ui/react/field');
var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "input"
});
const Input = withContext(field.Field.Input);
const InputPropsProvider = PropsProvider;

exports.Input = Input;
exports.InputPropsProvider = InputPropsProvider;
