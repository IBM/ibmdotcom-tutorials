"use strict";
'use strict';

var React = require('react');
var splitProps = require('../utils/split-props.cjs');
var provider = require('./provider.cjs');

const htmlProps = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function isHtmlProp(prop) {
  return typeof prop === "string" && htmlProps.has(prop);
}
function useResolvedProps(inProps, cvaRecipe, shouldForwardProps) {
  const { css, isValidProperty } = provider.useChakraContext();
  const { children, ...props } = inProps;
  const result = React.useMemo(() => {
    const [forwardedProps, restProps_B] = splitProps.splitProps(
      props,
      (key) => shouldForwardProps(key, cvaRecipe.variantKeys)
    );
    const [variantProps, restProps_C] = splitProps.splitProps(
      restProps_B,
      cvaRecipe.variantKeys
    );
    const [styleProps, elementProps] = splitProps.splitProps(restProps_C, isValidProperty);
    return {
      forwardedProps,
      variantProps,
      styleProps,
      elementProps
    };
  }, [cvaRecipe.variantKeys, shouldForwardProps, props, isValidProperty]);
  const { css: cssStyles, ...propStyles } = result.styleProps;
  const cvaStyles = React.useMemo(() => {
    const variantProps = { ...result.variantProps };
    if (!cvaRecipe.variantKeys.includes("colorPalette")) {
      variantProps.colorPalette = props.colorPalette;
    }
    if (!cvaRecipe.variantKeys.includes("orientation")) {
      variantProps.orientation = props.orientation;
    }
    return cvaRecipe(variantProps);
  }, [cvaRecipe, result.variantProps, props.colorPalette, props.orientation]);
  const styles = React.useMemo(() => {
    return css(cvaStyles, ...toArray(cssStyles), propStyles);
  }, [css, cvaStyles, cssStyles, propStyles]);
  return {
    styles,
    props: {
      ...result.forwardedProps,
      ...result.elementProps,
      children
    }
  };
}
const toArray = (val) => {
  const res = Array.isArray(val) ? val : [val];
  return res.filter(Boolean).flat();
};

exports.isHtmlProp = isHtmlProp;
exports.useResolvedProps = useResolvedProps;
