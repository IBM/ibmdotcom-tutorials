"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var createContext = require('../create-context.cjs');

const [RecipePropsContextProvider, useParentRecipeProps] = createContext.createContext({
  name: "RecipePropsContext",
  strict: false
});
function RecipePropsProvider(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(RecipePropsContextProvider, { value: props.value, children: props.children });
}

exports.RecipePropsProvider = RecipePropsProvider;
exports.useParentRecipeProps = useParentRecipeProps;
