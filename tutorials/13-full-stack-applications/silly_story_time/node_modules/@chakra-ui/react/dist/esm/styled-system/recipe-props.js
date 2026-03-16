"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { createContext } from '../create-context.js';

const [RecipePropsContextProvider, useParentRecipeProps] = createContext({
  name: "RecipePropsContext",
  strict: false
});
function RecipePropsProvider(props) {
  return /* @__PURE__ */ jsx(RecipePropsContextProvider, { value: props.value, children: props.children });
}

export { RecipePropsProvider, useParentRecipeProps };
