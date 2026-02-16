"use strict";
import { omit } from '../utils/omit.js';
import { splitProps } from '../utils/split-props.js';

const getSlotRecipes = (config = {}) => {
  const init = (slot) => ({
    base: config.base?.[slot] ?? {},
    variants: {},
    defaultVariants: config.defaultVariants ?? {},
    compoundVariants: config.compoundVariants ? getSlotCompoundVariant(config.compoundVariants, slot) : []
  });
  const slots = config.slots ?? [];
  const entries = slots.map((slot) => [slot, init(slot)]);
  for (const [variantsKey, variantsSpec] of Object.entries(
    config.variants ?? {}
  )) {
    for (const [variantKey, variantSpec] of Object.entries(
      variantsSpec
    )) {
      entries.forEach(([slot, slotRecipe]) => {
        var _a;
        (_a = slotRecipe.variants)[variantsKey] ?? (_a[variantsKey] = {});
        slotRecipe.variants[variantsKey][variantKey] = variantSpec[slot] ?? {};
      });
    }
  }
  return Object.fromEntries(entries);
};
const getSlotCompoundVariant = (compoundVariants, slotName) => compoundVariants.filter((compoundVariant) => compoundVariant.css[slotName]).map((compoundVariant) => ({
  ...compoundVariant,
  css: compoundVariant.css[slotName]
}));
function createSlotRecipeFn(options) {
  const { cva } = options;
  return function sva(config = {}) {
    const slots = Object.entries(getSlotRecipes(config)).map(
      ([slot, slotCva]) => [slot, cva(slotCva)]
    );
    function svaFn(props) {
      const result = slots.map(([slot, cvaFn]) => [slot, cvaFn(props)]);
      return Object.fromEntries(result);
    }
    const variants = config.variants ?? {};
    const variantKeys = Object.keys(variants);
    function splitVariantProps(props) {
      const restProps = omit(props, ["recipe"]);
      const [recipeProps, localProps] = splitProps(restProps, variantKeys);
      if (!variantKeys.includes("colorPalette")) {
        recipeProps.colorPalette = props.colorPalette || config.defaultVariants?.colorPalette;
      }
      if (variantKeys.includes("orientation")) {
        localProps.orientation = props.orientation;
      }
      return [recipeProps, localProps];
    }
    const variantMap = Object.fromEntries(
      Object.entries(variants).map(([key, value]) => [key, Object.keys(value)])
    );
    let classNameMap = {};
    if (config.className) {
      classNameMap = Object.fromEntries(
        config.slots.map((slot) => [
          slot,
          `${config.className}__${slot}`
        ])
      );
    }
    return Object.assign(svaFn, {
      variantMap,
      variantKeys,
      splitVariantProps,
      classNameMap
    });
  };
}

export { createSlotRecipeFn, getSlotCompoundVariant };
