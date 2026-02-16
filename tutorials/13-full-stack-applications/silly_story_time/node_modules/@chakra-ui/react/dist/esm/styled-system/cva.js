"use strict";
import { compact } from '../utils/compact.js';
import { cx } from '../utils/cx.js';
import { mergeWith } from '../utils/merge.js';
import { omit } from '../utils/omit.js';
import { splitProps } from '../utils/split-props.js';
import { uniq } from '../utils/uniq.js';
import { createCssFn } from './css.js';

const defaults = (conf) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...conf
});
function createRecipeFn(options) {
  const { css, conditions, normalize, layers } = options;
  function cva(config = {}) {
    const { base, variants, defaultVariants, compoundVariants } = defaults(config);
    const getVariantCss = createCssFn({
      conditions,
      normalize,
      transform(prop, value) {
        return variants[prop]?.[value];
      }
    });
    const resolve = (props = {}) => {
      const variantSelections = normalize({
        ...defaultVariants,
        ...compact(props)
      });
      let variantCss = { ...base };
      mergeWith(variantCss, getVariantCss(variantSelections));
      const compoundVariantCss = getCompoundVariantCss(
        compoundVariants,
        variantSelections
      );
      return layers.wrap("recipes", css(variantCss, compoundVariantCss));
    };
    const variantKeys = Object.keys(variants);
    const splitVariantProps = (props) => {
      const restProps = omit(props, ["recipe"]);
      const [recipeProps, localProps] = splitProps(restProps, variantKeys);
      if (!variantKeys.includes("colorPalette")) {
        recipeProps.colorPalette = props.colorPalette || defaultVariants.colorPalette;
      }
      if (variantKeys.includes("orientation")) {
        localProps.orientation = props.orientation;
      }
      return [recipeProps, localProps];
    };
    const variantMap = Object.fromEntries(
      Object.entries(variants).map(([key, value]) => [
        key,
        Object.keys(value)
      ])
    );
    const cvaFn = (props) => css(resolve(props));
    return Object.assign(cvaFn, {
      className: config.className,
      __cva__: true,
      variantMap,
      variantKeys,
      raw: resolve,
      config,
      splitVariantProps,
      merge(other) {
        return cva(mergeCva(options)(this, other));
      }
    });
  }
  function getCompoundVariantCss(cvs, vm) {
    let result = {};
    cvs.forEach((cv) => {
      const isMatching = Object.entries(cv).every(([key, value]) => {
        if (key === "css") return true;
        const values = Array.isArray(value) ? value : [value];
        return values.some((value2) => vm[key] === value2);
      });
      if (isMatching) {
        result = css(result, cv.css);
      }
    });
    return result;
  }
  return cva;
}
function mergeCva(opts) {
  const { css } = opts;
  return function mergeCva2(cvaA, cvaB) {
    const override = defaults(cvaB.config);
    const variantKeys = uniq(cvaA.variantKeys, Object.keys(cvaB.variants));
    const base = css(cvaA.base, override.base);
    const variants = Object.fromEntries(
      variantKeys.map((key) => [
        key,
        css(cvaA.config.variants[key], override.variants[key])
      ])
    );
    const defaultVariants = mergeWith(
      cvaA.config.defaultVariants,
      override.defaultVariants
    );
    const compoundVariants = [
      ...cvaA.compoundVariants,
      ...override.compoundVariants
    ];
    const className = cx(cvaA.className, cvaB.className);
    return {
      className,
      base,
      variants,
      defaultVariants,
      compoundVariants
    };
  };
}

export { createRecipeFn };
