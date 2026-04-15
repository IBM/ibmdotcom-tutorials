"use strict";
'use strict';

const defaultLayers = {
  reset: "reset",
  base: "base",
  tokens: "tokens",
  recipes: "recipes"
};
const layerOrder = {
  reset: 0,
  base: 1,
  tokens: 2,
  recipes: 3
};
function createLayers(config) {
  const layers = config.layers ?? defaultLayers;
  const values = Object.values(layers);
  const names = values.sort((a, b) => layerOrder[a] - layerOrder[b]);
  return {
    names,
    atRule: `@layer ${names.join(", ")};`,
    wrap(layer, styles) {
      if (config.disableLayers) return styles;
      const params = layers[layer];
      return { [`@layer ${params}`]: styles };
    }
  };
}

exports.createLayers = createLayers;
