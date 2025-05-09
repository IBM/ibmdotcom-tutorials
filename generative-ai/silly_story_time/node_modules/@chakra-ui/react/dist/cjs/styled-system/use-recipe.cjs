"use strict";
"use client";
'use strict';

var React = require('react');
var provider = require('./provider.cjs');

function useRecipe(options) {
  const { key, recipe: recipeProp } = options;
  const sys = provider.useChakraContext();
  return React.useMemo(() => {
    const recipe = recipeProp || (key != null ? sys.getRecipe(key) : {});
    return sys.cva(structuredClone(recipe));
  }, [key, recipeProp, sys]);
}

exports.useRecipe = useRecipe;
