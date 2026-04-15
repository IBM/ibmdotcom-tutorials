"use strict";
import { isCssProperty } from '@pandacss/is-valid-prop';
import { compact } from '../utils/compact.js';
import { flatten } from '../utils/flatten.js';
import { isObject } from '../utils/is.js';
import { memo } from '../utils/memo.js';
import { mergeWith } from '../utils/merge.js';
import { splitProps } from '../utils/split-props.js';
import { createBreakpoints } from './breakpoints.js';
import { createConditions } from './conditions.js';
import { mergeConfigs } from './config.js';
import { createCssFn } from './css.js';
import { createRecipeFn } from './cva.js';
import { createLayers } from './layers.js';
import { createNormalizeFn } from './normalize.js';
import { createPreflight } from './preflight.js';
import { createSerializeFn } from './serialize.js';
import { createSlotRecipeFn } from './sva.js';
import { createTokenDictionary } from './token-dictionary.js';
import { createUtility } from './utility.js';

function createSystem(...configs) {
  const config = mergeConfigs(...configs);
  const {
    theme = {},
    utilities = {},
    globalCss = {},
    cssVarsRoot = ":where(:root, :host)",
    cssVarsPrefix = "chakra",
    preflight
  } = config;
  const layers = createLayers(config);
  const tokens = createTokenDictionary({
    breakpoints: theme.breakpoints,
    tokens: theme.tokens,
    semanticTokens: theme.semanticTokens,
    prefix: cssVarsPrefix
  });
  const breakpoints = createBreakpoints(theme.breakpoints ?? {});
  const conditions = createConditions({
    conditions: config.conditions ?? {},
    breakpoints
  });
  const utility = createUtility({
    config: utilities,
    tokens
  });
  function assignComposition() {
    const { textStyles, layerStyles, animationStyles } = theme;
    const compositions = compact({
      textStyle: textStyles,
      layerStyle: layerStyles,
      animationStyle: animationStyles
    });
    for (const [key, values] of Object.entries(compositions)) {
      const flatValues = flatten(
        values ?? {},
        (v) => isObject(v) && "value" in v
      );
      utility.register(key, {
        values: Object.keys(flatValues),
        transform(value) {
          return css(flatValues[value]);
        }
      });
    }
  }
  assignComposition();
  utility.addPropertyType("animationName", Object.keys(theme.keyframes ?? {}));
  const properties = /* @__PURE__ */ new Set(["css", ...utility.keys(), ...conditions.keys()]);
  const isValidProperty = memo(
    (prop) => properties.has(prop) || isCssProperty(prop)
  );
  const normalizeValue = (value) => {
    if (Array.isArray(value)) {
      return value.reduce((acc, current, index) => {
        const key = conditions.breakpoints[index];
        if (current != null) acc[key] = current;
        return acc;
      }, {});
    }
    return value;
  };
  const normalizeFn = createNormalizeFn({
    utility,
    normalize: normalizeValue
  });
  const serialize = createSerializeFn({
    conditions,
    isValidProperty
  });
  const css = createCssFn({
    transform: utility.transform,
    conditions,
    normalize: normalizeFn
  });
  const cva = createRecipeFn({
    css,
    conditions,
    normalize: normalizeFn,
    layers
  });
  const sva = createSlotRecipeFn({ cva });
  function getTokenCss() {
    const result = {};
    for (const [key, values] of tokens.cssVarMap.entries()) {
      const varsObj = Object.fromEntries(values);
      if (Object.keys(varsObj).length === 0) continue;
      const selector = key === "base" ? cssVarsRoot : conditions.resolve(key);
      const cssObject = css(serialize({ [selector]: varsObj }));
      mergeWith(result, cssObject);
    }
    return layers.wrap("tokens", result);
  }
  function getGlobalCss() {
    const keyframes = Object.fromEntries(
      Object.entries(theme.keyframes ?? {}).map(([key, value]) => [
        `@keyframes ${key}`,
        value
      ])
    );
    const result = Object.assign({}, keyframes, css(serialize(globalCss)));
    return layers.wrap("base", result);
  }
  function splitCssProps(props) {
    return splitProps(props, isValidProperty);
  }
  function getPreflightCss() {
    const result = createPreflight({ preflight });
    return layers.wrap("reset", result);
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
    _config: config,
    _global,
    breakpoints,
    tokens,
    conditions,
    utility,
    token: tokenFn,
    properties,
    layers,
    isValidProperty,
    splitCssProps,
    normalizeValue,
    getTokenCss,
    getGlobalCss,
    getPreflightCss,
    css,
    cva,
    sva,
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
  return isObject(mod) && !!Reflect.get(mod, "$$chakra");
};

export { createSystem, isValidSystem };
