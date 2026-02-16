"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "spinner"
});
const Spinner = withContext("span");
const SpinnerPropsProvider = PropsProvider;

exports.Spinner = Spinner;
exports.SpinnerPropsProvider = SpinnerPropsProvider;
