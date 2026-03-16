"use strict";
"use client";
'use strict';

var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');

const { PropsProvider, withContext } = createRecipeContext.createRecipeContext({
  key: "badge"
});
const Badge = withContext("span");
const BadgePropsProvider = PropsProvider;

exports.Badge = Badge;
exports.BadgePropsProvider = BadgePropsProvider;
exports.PropsProvider = PropsProvider;
exports.withContext = withContext;
