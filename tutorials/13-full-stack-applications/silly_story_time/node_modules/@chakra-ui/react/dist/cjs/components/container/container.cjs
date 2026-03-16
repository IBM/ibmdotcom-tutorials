"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "container"
});
const Container = withContext("div");
const ContainerPropsProvider = PropsProvider;

exports.Container = Container;
exports.ContainerPropsProvider = ContainerPropsProvider;
