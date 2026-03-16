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
var useSlotRecipe = require('./use-slot-recipe.cjs');

const upperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const createSlotRecipeContext = (options) => {
  const { key: recipeKey, recipe: recipeConfig } = options;
  const contextName = upperFirst(
    recipeKey || recipeConfig.className || "Component"
  );
  const [StylesProvider, useStyles] = createContext.createContext({
    name: `${contextName}StylesContext`,
    errorMessage: `use${contextName}Styles returned is 'undefined'. Seems you forgot to wrap the components in "<${contextName}.Root />" `
  });
  const [ClassNamesProvider, useClassNames] = createContext.createContext({
    name: `${contextName}ClassNameContext`,
    errorMessage: `use${contextName}ClassNames returned is 'undefined'. Seems you forgot to wrap the components in "<${contextName}.Root />" `,
    strict: false
  });
  const [PropsProvider, usePropsContext] = createContext.createContext({
    strict: false,
    name: `${contextName}PropsContext`,
    providerName: `${contextName}PropsContext`,
    defaultValue: {}
  });
  function useRecipeResult(props) {
    const { unstyled, ...restProps } = props;
    const slotRecipe = useSlotRecipe.useSlotRecipe({
      key: recipeKey,
      recipe: restProps.recipe || recipeConfig
    });
    const [variantProps, otherProps] = React.useMemo(
      () => slotRecipe.splitVariantProps(restProps),
      [restProps, slotRecipe]
    );
    const styles = React.useMemo(
      () => unstyled ? empty.EMPTY_SLOT_STYLES : slotRecipe(variantProps),
      [unstyled, variantProps, slotRecipe]
    );
    return {
      styles,
      classNames: slotRecipe.classNameMap,
      props: otherProps
    };
  }
  function withRootProvider(Component, options2 = {}) {
    const { defaultProps } = options2;
    const StyledComponent = (inProps) => {
      const propsContext = usePropsContext();
      const props = React.useMemo(
        () => mergeProps.mergeProps(defaultProps, propsContext, inProps),
        [propsContext, inProps]
      );
      const { styles, classNames, props: rootProps } = useRecipeResult(props);
      return /* @__PURE__ */ jsxRuntime.jsx(StylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(ClassNamesProvider, { value: classNames, children: /* @__PURE__ */ jsxRuntime.jsx(Component, { ...rootProps }) }) });
    };
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  }
  const withProvider = (Component, slot, options2) => {
    const { defaultProps, ...restOptions } = options2 ?? {};
    const SuperComponent = factory.chakra(Component, {}, restOptions);
    const StyledComponent = React.forwardRef((inProps, ref) => {
      const propsContext = usePropsContext();
      const props = React.useMemo(
        () => mergeProps.mergeProps(defaultProps ?? {}, propsContext, inProps),
        [propsContext, inProps]
      );
      const { styles, props: rootProps, classNames } = useRecipeResult(props);
      const className = classNames[slot];
      const element = /* @__PURE__ */ jsxRuntime.jsx(StylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(ClassNamesProvider, { value: classNames, children: /* @__PURE__ */ jsxRuntime.jsx(
        SuperComponent,
        {
          ref,
          ...rootProps,
          css: [styles[slot], props.css],
          className: cx.cx(props.className, className)
        }
      ) }) });
      return options2?.wrapElement?.(element, props) ?? element;
    });
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  };
  const withContext = (Component, slot, options2) => {
    const SuperComponent = factory.chakra(Component, {}, options2);
    const StyledComponent = React.forwardRef((props, ref) => {
      const styles = useStyles();
      const classNames = useClassNames();
      const className = classNames?.[slot];
      return /* @__PURE__ */ jsxRuntime.jsx(
        SuperComponent,
        {
          ...props,
          css: [slot ? styles[slot] : void 0, props.css],
          ref,
          className: cx.cx(props.className, className)
        }
      );
    });
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  };
  return {
    StylesProvider,
    ClassNamesProvider,
    PropsProvider,
    usePropsContext,
    useRecipeResult,
    withProvider,
    withContext,
    withRootProvider,
    useStyles,
    useClassNames
  };
};

exports.createSlotRecipeContext = createSlotRecipeContext;
