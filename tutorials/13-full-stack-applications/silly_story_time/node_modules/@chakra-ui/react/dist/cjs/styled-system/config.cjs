"use strict";
'use strict';

var clone = require('../utils/clone.cjs');
var merge = require('../utils/merge.cjs');

const defineConditions = (v) => v;
const defineRecipe = (v) => v;
const defineSlotRecipe = (v) => v;
const defineKeyframes = (v) => v;
const defineGlobalStyles = (v) => v;
const defineStyle = (v) => v;
const defineTextStyles = (v) => v;
const defineAnimationStyles = (v) => v;
const defineLayerStyles = (v) => v;
function createProxy() {
  const identity = (v) => v;
  return new Proxy(identity, {
    get() {
      return identity;
    }
  });
}
const defineTokens = /* @__PURE__ */ createProxy();
const defineSemanticTokens = /* @__PURE__ */ createProxy();
const defineConfig = (v) => v;
const mergeConfigs = (...configs) => {
  return merge.mergeWith({}, ...configs.map(clone.clone));
};

exports.defineAnimationStyles = defineAnimationStyles;
exports.defineConditions = defineConditions;
exports.defineConfig = defineConfig;
exports.defineGlobalStyles = defineGlobalStyles;
exports.defineKeyframes = defineKeyframes;
exports.defineLayerStyles = defineLayerStyles;
exports.defineRecipe = defineRecipe;
exports.defineSemanticTokens = defineSemanticTokens;
exports.defineSlotRecipe = defineSlotRecipe;
exports.defineStyle = defineStyle;
exports.defineTextStyles = defineTextStyles;
exports.defineTokens = defineTokens;
exports.mergeConfigs = mergeConfigs;
