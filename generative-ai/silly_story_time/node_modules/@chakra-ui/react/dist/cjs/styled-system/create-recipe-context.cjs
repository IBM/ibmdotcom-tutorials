"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var createContext = require('../create-context.cjs');
var mergeProps = require('../merge-props.cjs');
var cx = require('../utils/cx.cjs');
var empty = require('./empty.cjs');
var factory = require('./factory.cjs');
var useRecipe = require('./use-recipe.cjs');

const upperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
function createRecipeContext(options) {
  const { key: recipeKey, recipe: recipeConfig } = options;
  const contextName = upperFirst(
    recipeKey || recipeConfig.className || "Component"
  );
  const [PropsProvider, usePropsContext] = createContext.createContext({
    strict: false,
    name: `${contextName}PropsContext`,
    providerName: `${contextName}PropsContext`
  });
  function useRecipeResult(props) {
    const { unstyled, ...restProps } = props;
    const recipe = useRecipe.useRecipe({
      key: recipeKey,
      recipe: restProps.recipe || recipeConfig
    });
    const [variantProps, otherProps] = React.useMemo(
      () => recipe.splitVariantProps(restProps),
      [recipe, restProps]
    );
    const styles = unstyled ? empty.EMPTY_STYLES : recipe(variantProps);
    return {
      styles,
      className: recipe.className,
      props: otherProps
    };
  }
  const withContext = (Component, options2) => {
    const SuperComponent = factory.chakra(Component, {}, options2);
    const StyledComponent = React.forwardRef((inProps, ref) => {
      const propsContext = usePropsContext();
      const props = React.useMemo(
        () => mergeProps.mergeProps(propsContext, inProps),
        [inProps, propsContext]
      );
      const { styles, className, props: localProps } = useRecipeResult(props);
      return /* @__PURE__ */ jsxRuntime.jsx(
        SuperComponent,
        {
          ...localProps,
          ref,
          css: [styles, props.css],
          className: cx.cx(className, props.className)
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

exports.createRecipeContext = createRecipeContext;
