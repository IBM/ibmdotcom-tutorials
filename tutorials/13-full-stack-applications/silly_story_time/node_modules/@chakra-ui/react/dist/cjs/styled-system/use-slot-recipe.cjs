"use strict";
"use client";
'use strict';

var React = require('react');
var provider = require('./provider.cjs');

function useSlotRecipe(options) {
  const { key, recipe: recipeProp } = options;
  const sys = provider.useChakraContext();
  return React.useMemo(() => {
    const recipe = recipeProp || (key != null ? sys.getSlotRecipe(key) : {});
    return sys.sva(structuredClone(recipe));
  }, [key, recipeProp, sys]);
}

exports.useSlotRecipe = useSlotRecipe;
