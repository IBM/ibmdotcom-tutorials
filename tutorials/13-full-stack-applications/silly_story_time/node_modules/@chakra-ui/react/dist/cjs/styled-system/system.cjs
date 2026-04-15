"use strict";
'use strict';

var isValidProp = require('@pandacss/is-valid-prop');
var compact = require('../utils/compact.cjs');
var flatten = require('../utils/flatten.cjs');
var is = require('../utils/is.cjs');
var memo = require('../utils/memo.cjs');
var merge = require('../utils/merge.cjs');
var splitProps = require('../utils/split-props.cjs');
var breakpoints = require('./breakpoints.cjs');
var conditions = require('./conditions.cjs');
var config = require('./config.cjs');
var css = require('./css.cjs');
var cva = require('./cva.cjs');
var layers = require('./layers.cjs');
var normalize = require('./normalize.cjs');
var preflight = require('./preflight.cjs');
var serialize = require('./serialize.cjs');
var sva = require('./sva.cjs');
var tokenDictionary = require('./token-dictionary.cjs');
var utility = require('./utility.cjs');

function createSystem(...configs) {
  const config$1 = config.mergeConfigs(...configs);
  const {
    theme = {},
    utilities = {},
    globalCss = {},
    cssVarsRoot = ":where(:root, :host)",
    cssVarsPrefix = "chakra",
    preflight: preflight$1
  } = config$1;
  const layers$1 = layers.createLayers(config$1);
  const tokens = tokenDictionary.createTokenDictionary({
    breakpoints: theme.breakpoints,
    tokens: theme.tokens,
    semanticTokens: theme.semanticTokens,
    prefix: cssVarsPrefix
  });
  const breakpoints$1 = breakpoints.createBreakpoints(theme.breakpoints ?? {});
  const conditions$1 = conditions.createConditions({
    conditions: config$1.conditions ?? {},
    breakpoints: breakpoints$1
  });
  const utility$1 = utility.createUtility({
    config: utilities,
    tokens
  });
  function assignComposition() {
    const { textStyles, layerStyles, animationStyles } = theme;
    const compositions = compact.compact({
      textStyle: textStyles,
      layerStyle: layerStyles,
      animationStyle: animationStyles
    });
    for (const [key, values] of Object.entries(compositions)) {
      const flatValues = flatten.flatten(
        values ?? {},
        (v) => is.isObject(v) && "value" in v
      );
      utility$1.register(key, {
        values: Object.keys(flatValues),
        transform(value) {
          return css$1(flatValues[value]);
        }
      });
    }
  }
  assignComposition();
  utility$1.addPropertyType("animationName", Object.keys(theme.keyframes ?? {}));
  const properties = /* @__PURE__ */ new Set(["css", ...utility$1.keys(), ...conditions$1.keys()]);
  const isValidProperty = memo.memo(
    (prop) => properties.has(prop) || isValidProp.isCssProperty(prop)
  );
  const normalizeValue = (value) => {
    if (Array.isArray(value)) {
      return value.reduce((acc, current, index) => {
        const key = conditions$1.breakpoints[index];
        if (current != null) acc[key] = current;
        return acc;
      }, {});
    }
    return value;
  };
  const normalizeFn = normalize.createNormalizeFn({
    utility: utility$1,
    normalize: normalizeValue
  });
  const serialize$1 = serialize.createSerializeFn({
    conditions: conditions$1,
    isValidProperty
  });
  const css$1 = css.createCssFn({
    transform: utility$1.transform,
    conditions: conditions$1,
    normalize: normalizeFn
  });
  const cva$1 = cva.createRecipeFn({
    css: css$1,
    conditions: conditions$1,
    normalize: normalizeFn,
    layers: layers$1
  });
  const sva$1 = sva.createSlotRecipeFn({ cva: cva$1 });
  function getTokenCss() {
    const result = {};
    for (const [key, values] of tokens.cssVarMap.entries()) {
      const varsObj = Object.fromEntries(values);
      if (Object.keys(varsObj).length === 0) continue;
      const selector = key === "base" ? cssVarsRoot : conditions$1.resolve(key);
      const cssObject = css$1(serialize$1({ [selector]: varsObj }));
      merge.mergeWith(result, cssObject);
    }
    return layers$1.wrap("tokens", result);
  }
  function getGlobalCss() {
    const keyframes = Object.fromEntries(
      Object.entries(theme.keyframes ?? {}).map(([key, value]) => [
        `@keyframes ${key}`,
        value
      ])
    );
    const result = Object.assign({}, keyframes, css$1(serialize$1(globalCss)));
    return layers$1.wrap("base", result);
  }
  function splitCssProps(props) {
    return splitProps.splitProps(props, isValidProperty);
  }
  function getPreflightCss() {
    const result = preflight.createPreflight({ preflight: preflight$1 });
    return layers$1.wrap("reset", result);
  }
  const tokenMap = getTokenMap(tokens);
  const tokenFn = (path, fallback) => {
    return tokenMap.get(path)?.value || fallback;
  };
  tokenFn.var = (path, fallback) => {
    return tokenMap.get(path)?.variable || fallback;
  };
  function getRecipe(key, fallback) {
    return theme.recipes?.[key] ?? fallback;
  }
  function getSlotRecipe(key, fallback) {
    return theme.slotRecipes?.[key] ?? fallback;
  }
  function isRecipe(key) {
    return Object.hasOwnProperty.call(theme.recipes ?? {}, key);
  }
  function isSlotRecipe(key) {
    return Object.hasOwnProperty.call(theme.slotRecipes ?? {}, key);
  }
  function hasRecipe(key) {
    return isRecipe(key) || isSlotRecipe(key);
  }
  const _global = [getPreflightCss(), getGlobalCss(), getTokenCss()];
  return {
    $$chakra: true,
    _config: config$1,
    _global,
    breakpoints: breakpoints$1,
    tokens,
    conditions: conditions$1,
    utility: utility$1,
    token: tokenFn,
    properties,
    layers: layers$1,
    isValidProperty,
    splitCssProps,
    normalizeValue,
    getTokenCss,
    getGlobalCss,
    getPreflightCss,
    css: css$1,
    cva: cva$1,
    sva: sva$1,
    getRecipe,
    getSlotRecipe,
    hasRecipe,
    isRecipe,
    isSlotRecipe
  };
}
function getTokenMap(tokens) {
  const map = /* @__PURE__ */ new Map();
  tokens.allTokens.forEach((token) => {
    const { cssVar, virtual, conditions } = token.extensions;
    const value = !!conditions || virtual ? cssVar.ref : token.value;
    map.set(token.name, { value, variable: cssVar.ref });
  });
  return map;
}
const isValidSystem = (mod) => {
  return is.isObject(mod) && !!Reflect.get(mod, "$$chakra");
};

exports.createSystem = createSystem;
exports.isValidSystem = isValidSystem;
