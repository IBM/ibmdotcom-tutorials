"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { createContext } from '../create-context.js';
import { mergeProps } from '../merge-props.js';
import { cx } from '../utils/cx.js';
import { EMPTY_SLOT_STYLES } from './empty.js';
import { chakra } from './factory.js';
import { useSlotRecipe } from './use-slot-recipe.js';

const upperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const createSlotRecipeContext = (options) => {
  const { key: recipeKey, recipe: recipeConfig } = options;
  const contextName = upperFirst(
    recipeKey || recipeConfig.className || "Component"
  );
  const [StylesProvider, useStyles] = createContext({
    name: `${contextName}StylesContext`,
    errorMessage: `use${contextName}Styles returned is 'undefined'. Seems you forgot to wrap the components in "<${contextName}.Root />" `
  });
  const [ClassNamesProvider, useClassNames] = createContext({
    name: `${contextName}ClassNameContext`,
    errorMessage: `use${contextName}ClassNames returned is 'undefined'. Seems you forgot to wrap the components in "<${contextName}.Root />" `,
    strict: false
  });
  const [PropsProvider, usePropsContext] = createContext({
    strict: false,
    name: `${contextName}PropsContext`,
    providerName: `${contextName}PropsContext`,
    defaultValue: {}
  });
  function useRecipeResult(props) {
    const { unstyled, ...restProps } = props;
    const slotRecipe = useSlotRecipe({
      key: recipeKey,
      recipe: restProps.recipe || recipeConfig
    });
    const [variantProps, otherProps] = useMemo(
      () => slotRecipe.splitVariantProps(restProps),
      [restProps, slotRecipe]
    );
    const styles = useMemo(
      () => unstyled ? EMPTY_SLOT_STYLES : slotRecipe(variantProps),
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
      const props = useMemo(
        () => mergeProps(defaultProps, propsContext, inProps),
        [propsContext, inProps]
      );
      const { styles, classNames, props: rootProps } = useRecipeResult(props);
      return /* @__PURE__ */ jsx(StylesProvider, { value: styles, children: /* @__PURE__ */ jsx(ClassNamesProvider, { value: classNames, children: /* @__PURE__ */ jsx(Component, { ...rootProps }) }) });
    };
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  }
  const withProvider = (Component, slot, options2) => {
    const { defaultProps, ...restOptions } = options2 ?? {};
    const SuperComponent = chakra(Component, {}, restOptions);
    const StyledComponent = forwardRef((inProps, ref) => {
      const propsContext = usePropsContext();
      const props = useMemo(
        () => mergeProps(defaultProps ?? {}, propsContext, inProps),
        [propsContext, inProps]
      );
      const { styles, props: rootProps, classNames } = useRecipeResult(props);
      const className = classNames[slot];
      const element = /* @__PURE__ */ jsx(StylesProvider, { value: styles, children: /* @__PURE__ */ jsx(ClassNamesProvider, { value: classNames, children: /* @__PURE__ */ jsx(
        SuperComponent,
        {
          ref,
          ...rootProps,
          css: [styles[slot], props.css],
          className: cx(props.className, className)
        }
      ) }) });
      return options2?.wrapElement?.(element, props) ?? element;
    });
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  };
  const withContext = (Component, slot, options2) => {
    const SuperComponent = chakra(Component, {}, options2);
    const StyledComponent = forwardRef((props, ref) => {
      const styles = useStyles();
      const classNames = useClassNames();
      const className = classNames?.[slot];
      return /* @__PURE__ */ jsx(
        SuperComponent,
        {
          ...props,
          css: [slot ? styles[slot] : void 0, props.css],
          ref,
          className: cx(props.className, className)
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

export { createSlotRecipeContext };
