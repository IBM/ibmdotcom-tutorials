"use strict";
'use strict';

var references = require('./references.cjs');

const addCssVariables = {
  type: "extensions",
  enforce: "pre",
  name: "tokens/css-var",
  transform(token, dictionary) {
    const { prefix, formatCssVar } = dictionary;
    const { negative, originalPath } = token.extensions;
    const path = negative ? originalPath : token.path;
    return {
      cssVar: formatCssVar(path.filter(Boolean), prefix)
    };
  }
};
const addConditionalCssVariables = {
  enforce: "post",
  type: "value",
  name: "tokens/conditionals",
  transform(token, dictionary) {
    const { prefix, formatCssVar } = dictionary;
    const refs = references.getReferences(token.value);
    if (!refs.length) return token.value;
    refs.forEach((ref) => {
      const variable = formatCssVar(ref.split("."), prefix);
      token.value = token.value.replace(`{${variable.ref}}`, variable);
    });
    return token.value;
  }
};
const addColorPalette = {
  type: "extensions",
  enforce: "pre",
  name: "tokens/colors/colorPalette",
  match(token) {
    return token.extensions.category === "colors" && !token.extensions.virtual;
  },
  transform(token, dict) {
    let path = token.path.slice();
    path.pop();
    path.shift();
    if (path.length === 0) {
      const newPath = [...token.path];
      newPath.shift();
      path = newPath;
    }
    if (path.length === 0) {
      return {};
    }
    const roots = path.reduce((acc, _, i, arr) => {
      const next = arr.slice(0, i + 1);
      acc.push(next);
      return acc;
    }, []);
    const root = path[0];
    const value = dict.formatTokenName(path);
    const keys = token.path.slice(token.path.indexOf(root) + 1).reduce((acc, _, i, arr) => {
      acc.push(arr.slice(i));
      return acc;
    }, []);
    if (keys.length === 0) {
      keys.push([""]);
    }
    return {
      colorPalette: { value, roots, keys }
    };
  }
};
const tokenTransforms = [
  addCssVariables,
  addConditionalCssVariables,
  addColorPalette
];

exports.addColorPalette = addColorPalette;
exports.addConditionalCssVariables = addConditionalCssVariables;
exports.addCssVariables = addCssVariables;
exports.tokenTransforms = tokenTransforms;
