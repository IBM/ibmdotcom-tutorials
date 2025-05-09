"use strict";
"use client";
import { useMemo } from 'react';
import { useChakraContext } from './provider.js';

function useSlotRecipe(options) {
  const { key, recipe: recipeProp } = options;
  const sys = useChakraContext();
  return useMemo(() => {
    const recipe = recipeProp || (key != null ? sys.getSlotRecipe(key) : {});
    return sys.sva(structuredClone(recipe));
  }, [key, recipeProp, sys]);
}

export { useSlotRecipe };
