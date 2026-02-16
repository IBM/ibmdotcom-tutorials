"use strict";
'use strict';

var compact = require('../utils/compact.cjs');
var createProps = require('../utils/create-props.cjs');
var is = require('../utils/is.cjs');
var memo = require('../utils/memo.cjs');
var walkObject = require('../utils/walk-object.cjs');
var cssVar = require('./css-var.cjs');
var esc = require('./esc.cjs');
var expandReference = require('./expand-reference.cjs');
var mapToJson = require('./map-to-json.cjs');
var references = require('./references.cjs');
var tokenMiddleware = require('./token-middleware.cjs');
var tokenTransforms = require('./token-transforms.cjs');

const isToken = (value) => {
  return is.isObject(value) && Object.prototype.hasOwnProperty.call(value, "value");
};
function expandBreakpoints(breakpoints) {
  if (!breakpoints) return { breakpoints: {}, sizes: {} };
  return {
    breakpoints: walkObject.mapObject(breakpoints, (value) => ({ value })),
    sizes: Object.fromEntries(
      Object.entries(breakpoints).map(([key, value]) => [
        `breakpoint-${key}`,
        { value }
      ])
    )
  };
}
function createTokenDictionary(options) {
  const {
    prefix = "",
    tokens = {},
    semanticTokens = {},
    breakpoints = {}
  } = options;
  const formatTokenName = (path) => path.join(".");
  const formatCssVar = (path, prefix2) => cssVar.cssVar(path.join("-"), { prefix: prefix2 });
  const allTokens = [];
  const tokenNameMap = /* @__PURE__ */ new Map();
  const conditionMap = /* @__PURE__ */ new Map();
  const cssVarMap = /* @__PURE__ */ new Map();
  const colorPaletteMap = /* @__PURE__ */ new Map();
  const flatMap = /* @__PURE__ */ new Map();
  const byCategory = /* @__PURE__ */ new Map();
  const categoryMap = /* @__PURE__ */ new Map();
  const transforms = /* @__PURE__ */ new Map();
  const middlewares = [];
  function registerToken(token, phase) {
    allTokens.push(token);
    tokenNameMap.set(token.name, token);
    if (phase) {
      transforms.forEach((fn) => {
        if (fn.enforce === phase) transformToken(fn, token);
      });
    }
  }
  const breakpointTokens = expandBreakpoints(breakpoints);
  const computedTokens = compact.compact({
    ...tokens,
    breakpoints: breakpointTokens.breakpoints,
    sizes: {
      ...tokens.sizes,
      ...breakpointTokens.sizes
    }
  });
  function registerTokens() {
    walkObject.walkObject(
      computedTokens,
      (entry, path) => {
        const isDefault = path.includes("DEFAULT");
        path = filterDefault(path);
        const category = path[0];
        const name = formatTokenName(path);
        const t = is.isString(entry) ? { value: entry } : entry;
        const token = {
          value: t.value,
          originalValue: t.value,
          name,
          path,
          extensions: {
            condition: "base",
            originalPath: path,
            category,
            prop: formatTokenName(path.slice(1))
          }
        };
        if (isDefault) {
          token.extensions.default = true;
        }
        registerToken(token);
      },
      { stop: isToken }
    );
    walkObject.walkObject(
      semanticTokens,
      (entry, path) => {
        const isDefault = path.includes("DEFAULT");
        path = filterBaseCondition(filterDefault(path));
        const category = path[0];
        const name = formatTokenName(path);
        const t = is.isString(entry.value) ? { value: { base: entry.value } } : entry;
        const token = {
          value: t.value.base || "",
          originalValue: t.value.base || "",
          name,
          path,
          extensions: {
            originalPath: path,
            category,
            conditions: t.value,
            condition: "base",
            prop: formatTokenName(path.slice(1))
          }
        };
        if (isDefault) {
          token.extensions.default = true;
        }
        registerToken(token);
      },
      { stop: isToken }
    );
  }
  function getByName(name) {
    return tokenNameMap.get(name);
  }
  function buildConditionMap(token) {
    const { condition } = token.extensions;
    if (!condition) return;
    if (!conditionMap.has(condition)) {
      conditionMap.set(condition, /* @__PURE__ */ new Set());
    }
    conditionMap.get(condition).add(token);
  }
  function buildCategoryMap(token) {
    const { category, prop } = token.extensions;
    if (!category) return;
    if (!categoryMap.has(category)) {
      categoryMap.set(category, /* @__PURE__ */ new Map());
    }
    categoryMap.get(category).set(prop, token);
  }
  function buildCssVars(token) {
    const { condition, negative, virtual, cssVar: cssVar2 } = token.extensions;
    if (negative || virtual || !condition || !cssVar2) return;
    if (!cssVarMap.has(condition)) {
      cssVarMap.set(condition, /* @__PURE__ */ new Map());
    }
    cssVarMap.get(condition).set(cssVar2.var, token.value);
  }
  function buildFlatMap(token) {
    const { category, prop, cssVar: cssVar2, negative } = token.extensions;
    if (!category) return;
    if (!byCategory.has(category)) {
      byCategory.set(category, /* @__PURE__ */ new Map());
    }
    const value = negative ? token.extensions.conditions ? token.originalValue : token.value : cssVar2.ref;
    byCategory.get(category).set(prop, value);
    flatMap.set([category, prop].join("."), value);
  }
  function buildColorPalette(token) {
    const { colorPalette, virtual, default: isDefault } = token.extensions;
    if (!colorPalette || virtual) return;
    colorPalette.roots.forEach((root) => {
      const name = formatTokenName(root);
      if (!colorPaletteMap.has(name)) {
        colorPaletteMap.set(name, /* @__PURE__ */ new Map());
      }
      const virtualPath = replaceRootWithColorPalette(
        [...token.path],
        [...root]
      );
      const virtualName = formatTokenName(virtualPath);
      const virtualToken = getByName(virtualName);
      if (!virtualToken || !virtualToken.extensions.cssVar) return;
      const { var: virtualVar } = virtualToken.extensions.cssVar;
      colorPaletteMap.get(name).set(virtualVar, token.extensions.cssVar.ref);
      if (isDefault && root.length === 1) {
        const colorPaletteName = formatTokenName(["colors", "colorPalette"]);
        const colorPaletteToken = getByName(colorPaletteName);
        if (!colorPaletteToken) return;
        const name2 = formatTokenName(token.path);
        const virtualToken2 = getByName(name2);
        if (!virtualToken2) return;
        const keyPath = colorPalette.keys[0]?.filter(Boolean);
        if (!keyPath.length) return;
        const computedName = formatTokenName(root.concat(keyPath));
        if (!colorPaletteMap.has(computedName)) {
          colorPaletteMap.set(computedName, /* @__PURE__ */ new Map());
        }
        colorPaletteMap.get(computedName).set(
          colorPaletteToken.extensions.cssVar.var,
          virtualToken2.extensions.cssVar.ref
        );
      }
    });
  }
  let byCategoryJson = {};
  function setupViews() {
    allTokens.forEach((token) => {
      buildConditionMap(token);
      buildCategoryMap(token);
      buildCssVars(token);
      buildFlatMap(token);
      buildColorPalette(token);
    });
    byCategoryJson = mapToJson.mapToJson(byCategory);
  }
  const colorMix = (value, tokenFn) => {
    if (!value || typeof value !== "string") return { invalid: true, value };
    const [colorPath, rawOpacity] = value.split("/");
    if (!colorPath || !rawOpacity) {
      return { invalid: true, value: colorPath };
    }
    const colorToken = tokenFn(colorPath);
    const opacityToken = getByName(`opacity.${rawOpacity}`)?.value;
    if (!opacityToken && isNaN(Number(rawOpacity))) {
      return { invalid: true, value: colorPath };
    }
    const percent = opacityToken ? Number(opacityToken) * 100 + "%" : `${rawOpacity}%`;
    const color = colorToken ?? colorPath;
    return {
      invalid: false,
      color,
      value: `color-mix(in srgb, ${color} ${percent}, transparent)`
    };
  };
  const getVar = memo.memo((value, fallback) => {
    return flatMap.get(value) ?? fallback;
  });
  const getCategoryValues = memo.memo((category) => {
    return byCategoryJson[category] || null;
  });
  const expandReferenceInValue = memo.memo((value) => {
    return expandReference.expandTokenReferences(value, (path) => {
      if (!path) return;
      if (path.includes("/")) {
        const mix = colorMix(path, (v) => getVar(v));
        if (mix.invalid) {
          throw new Error("Invalid color mix at " + path + ": " + mix.value);
        }
        return mix.value;
      }
      const resolved = getVar(path);
      if (resolved) return resolved;
      return references.TOKEN_PATH_REGEX.test(path) ? esc.esc(path) : path;
    });
  });
  const dictionary = {
    prefix,
    allTokens,
    tokenMap: tokenNameMap,
    registerToken,
    getByName,
    formatTokenName,
    formatCssVar,
    flatMap,
    cssVarMap,
    categoryMap,
    colorPaletteMap,
    getVar,
    getCategoryValues,
    expandReferenceInValue
  };
  function registerTransform(...fns) {
    fns.forEach((fn) => {
      transforms.set(fn.name, fn);
    });
  }
  function registerMiddleware(...fns) {
    middlewares.push(...fns);
  }
  function transformToken(transform, token) {
    if (token.extensions.references) return;
    if (is.isFunction(transform.match) && !transform.match(token)) return;
    const fn = (v) => transform.transform(v, dictionary);
    const transformed = fn(token);
    switch (true) {
      case transform.type === "extensions":
        Object.assign(token.extensions, transformed);
        break;
      case transform.type === "value":
        token.value = transformed;
        break;
      default:
        token[transform.type] = transformed;
        break;
    }
  }
  function applyMiddlewares(enforce) {
    middlewares.forEach((middleware) => {
      if (middleware.enforce === enforce) {
        middleware.transform(dictionary);
      }
    });
  }
  function applyTransforms(enforce) {
    transforms.forEach((transform) => {
      if (transform.enforce === enforce) {
        allTokens.forEach((token) => {
          transformToken(transform, token);
        });
      }
    });
  }
  function addConditionalTokens() {
    allTokens.forEach((token) => {
      const tokens2 = getConditionalTokens(token);
      if (!tokens2 || tokens2.length === 0) return;
      tokens2.forEach((token2) => {
        registerToken(token2);
      });
    });
  }
  function getTokenReferences(value) {
    const refs = references.getReferences(value);
    return refs.map((ref) => getByName(ref)).filter(Boolean);
  }
  function addReferences() {
    allTokens.forEach((token) => {
      if (!references.hasReference(token.value)) return;
      const references$1 = getTokenReferences(token.value);
      token.extensions.references = references$1.reduce((acc, ref) => {
        acc[ref.name] = ref;
        return acc;
      }, {});
    });
  }
  function expandTokenReferences() {
    allTokens.forEach((token) => {
      references.expandReferences(token);
    });
  }
  function build() {
    applyMiddlewares("pre");
    applyTransforms("pre");
    addConditionalTokens();
    addReferences();
    expandTokenReferences();
    applyMiddlewares("post");
    applyTransforms("post");
    setupViews();
  }
  registerTokens();
  registerTransform(...tokenTransforms.tokenTransforms);
  registerMiddleware(...tokenMiddleware.tokenMiddlewares);
  build();
  return dictionary;
}
function filterDefault(path) {
  if (path[0] === "DEFAULT") return path;
  return path.filter((item) => item !== "DEFAULT");
}
function filterBaseCondition(path) {
  return path.filter((item) => item !== "base");
}
function getConditionalTokens(token) {
  if (!token.extensions.conditions) return;
  const { conditions } = token.extensions;
  const tokens = [];
  walkObject.walkObject(conditions, (value, path) => {
    const nextPath = filterBaseCondition(path);
    if (!nextPath.length) return;
    const nextToken = structuredClone(token);
    nextToken.value = value;
    nextToken.extensions.condition = nextPath.join(":");
    tokens.push(nextToken);
  });
  return tokens;
}
function replaceRootWithColorPalette(path, roots) {
  const startIndex = path.findIndex(
    (_, index) => roots.every(
      (rootElement, rootIndex) => path[index + rootIndex] === rootElement
    )
  );
  if (startIndex === -1) {
    return path;
  }
  path.splice(startIndex, roots.length);
  path.splice(startIndex, 0, "colorPalette");
  return path;
}
const tokenCategories = createProps.createProps()([
  "aspectRatios",
  "zIndex",
  "opacity",
  "colors",
  "fonts",
  "fontSizes",
  "fontWeights",
  "lineHeights",
  "letterSpacings",
  "sizes",
  "shadows",
  "spacing",
  "radii",
  "cursor",
  "borders",
  "borderWidths",
  "borderStyles",
  "durations",
  "easings",
  "animations",
  "blurs",
  "gradients",
  "breakpoints",
  "assets"
]);

exports.createTokenDictionary = createTokenDictionary;
exports.tokenCategories = tokenCategories;
