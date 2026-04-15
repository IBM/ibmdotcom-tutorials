"use strict";
"use client";
import { useMemo } from 'react';
import { useChakraContext } from './provider.js';

function useRecipe(options) {
  const { key, recipe: recipeProp } = options;
  const sys = useChakraContext();
  return useMemo(() => {
    const recipe = recipeProp || (key != null ? sys.getRecipe(key) : {});
    return sys.cva(structuredClone(recipe));
  }, [key, recipeProp, sys]);
}

export { useRecipe };
