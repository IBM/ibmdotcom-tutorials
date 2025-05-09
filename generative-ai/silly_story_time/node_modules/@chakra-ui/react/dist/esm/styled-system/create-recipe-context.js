"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { useMemo, forwardRef } from 'react';
import { createContext } from '../create-context.js';
import { mergeProps } from '../merge-props.js';
import { cx } from '../utils/cx.js';
import { EMPTY_STYLES } from './empty.js';
import { chakra } from './factory.js';
import { useRecipe } from './use-recipe.js';

const upperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
function createRecipeContext(options) {
  const { key: recipeKey, recipe: recipeConfig } = options;
  const contextName = upperFirst(
    recipeKey || recipeConfig.className || "Component"
  );
  const [PropsProvider, usePropsContext] = createContext({
    strict: false,
    name: `${contextName}PropsContext`,
    providerName: `${contextName}PropsContext`
  });
  function useRecipeResult(props) {
    const { unstyled, ...restProps } = props;
    const recipe = useRecipe({
      key: recipeKey,
      recipe: restProps.recipe || recipeConfig
    });
    const [variantProps, otherProps] = useMemo(
      () => recipe.splitVariantProps(restProps),
      [recipe, restProps]
    );
    const styles = unstyled ? EMPTY_STYLES : recipe(variantProps);
    return {
      styles,
      className: recipe.className,
      props: otherProps
    };
  }
  const withContext = (Component, options2) => {
    const SuperComponent = chakra(Component, {}, options2);
    const StyledComponent = forwardRef((inProps, ref) => {
      const propsContext = usePropsContext();
      const props = useMemo(
        () => mergeProps(propsContext, inProps),
        [inProps, propsContext]
      );
      const { styles, className, props: localProps } = useRecipeResult(props);
      return /* @__PURE__ */ jsx(
        SuperComponent,
        {
          ...localProps,
          ref,
          css: [styles, props.css],
          className: cx(className, props.className)
        }
      );
    });
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  };
  function withPropsProvider() {
    return PropsProvider;
  }
  return {
    withContext,
    PropsProvider,
    withPropsProvider,
    usePropsContext,
    useRecipeResult
  };
}

export { createRecipeContext };
