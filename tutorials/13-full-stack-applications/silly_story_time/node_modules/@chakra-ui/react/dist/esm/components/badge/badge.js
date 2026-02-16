"use strict";
"use client";
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';

const { PropsProvider, withContext } = createRecipeContext({
  key: "badge"
});
const Badge = withContext("span");
const BadgePropsProvider = PropsProvider;

export { Badge, BadgePropsProvider, PropsProvider, withContext };
