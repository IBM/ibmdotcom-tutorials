"use strict";
"use client";
import { jsxs, jsx } from 'react/jsx-runtime';
import emotionIsPropValid from '@emotion/is-prop-valid';
import { withEmotionCache, ThemeContext } from '@emotion/react';
import { serializeStyles } from '@emotion/serialize';
import { useInsertionEffectAlwaysWithSyncFallback } from '@emotion/use-insertion-effect-with-fallbacks';
import { getRegisteredStyles, registerStyles, insertStyles } from '@emotion/utils';
import * as React from 'react';
import { mergeProps } from '../merge-props.js';
import { mergeRefs } from '../merge-refs.js';
import { compact } from '../utils/compact.js';
import { cx } from '../utils/cx.js';
import { interopDefault } from '../utils/interop.js';
import { getElementRef } from '../utils/ref.js';
import { useChakraContext } from './provider.js';
import { useResolvedProps, isHtmlProp } from './use-resolved-props.js';

const isPropValid = interopDefault(emotionIsPropValid);
const testOmitPropsOnStringTag = isPropValid;
const testOmitPropsOnComponent = (key) => key !== "theme";
const composeShouldForwardProps = (tag, options, isReal) => {
  let shouldForwardProp;
  if (options) {
    const optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? (propName) => tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName) : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== "function" && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};
let isBrowser = typeof document !== "undefined";
const Insertion = ({ cache: cache2, serialized, isStringTag }) => {
  registerStyles(cache2, serialized, isStringTag);
  const rules = useInsertionEffectAlwaysWithSyncFallback(
    () => insertStyles(cache2, serialized, isStringTag)
  );
  if (!isBrowser && rules !== void 0) {
    let serializedNames = serialized.name;
    let next = serialized.next;
    while (next !== void 0) {
      serializedNames = cx(serializedNames, next.name);
      next = next.next;
    }
    return /* @__PURE__ */ jsx(
      "style",
      {
        ...{
          [`data-emotion`]: cx(cache2.key, serializedNames),
          dangerouslySetInnerHTML: { __html: rules },
          nonce: cache2.sheet.nonce
        }
      }
    );
  }
  return null;
};
const createStyled = (tag, configOrCva = {}, options = {}) => {
  if (process.env.NODE_ENV !== "production") {
    if (tag === void 0) {
      throw new Error(
        "You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it."
      );
    }
  }
  const isReal = tag.__emotion_real === tag;
  const baseTag = isReal && tag.__emotion_base || tag;
  let identifierName;
  let targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  let styles = [];
  const Styled = withEmotionCache((inProps, cache2, ref) => {
    const { cva, isValidProperty } = useChakraContext();
    const cvaFn = configOrCva.__cva__ ? configOrCva : cva(configOrCva);
    const cvaRecipe = mergeCva(tag.__emotion_cva, cvaFn);
    const createShouldForwardProps = (props2) => {
      return (prop, variantKeys) => {
        if (props2.includes(prop)) return true;
        return !variantKeys?.includes(prop) && !isValidProperty(prop);
      };
    };
    if (!options.shouldForwardProp && options.forwardProps) {
      options.shouldForwardProp = createShouldForwardProps(options.forwardProps);
    }
    const fallbackShouldForwardProp = (prop, variantKeys) => {
      const emotionSfp = typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
      const chakraSfp = !variantKeys?.includes(prop) && !isValidProperty(prop);
      return emotionSfp(prop) && chakraSfp;
    };
    const shouldForwardProp = composeShouldForwardProps(tag, options, isReal) || fallbackShouldForwardProp;
    const propsWithDefault = React.useMemo(
      () => Object.assign({}, options.defaultProps, compact(inProps)),
      [inProps]
    );
    const { props, styles: styleProps } = useResolvedProps(
      propsWithDefault,
      cvaRecipe,
      shouldForwardProp
    );
    let className = "";
    let classInterpolations = [styleProps];
    let mergedProps = props;
    if (props.theme == null) {
      mergedProps = {};
      for (let key in props) {
        mergedProps[key] = props[key];
      }
      mergedProps.theme = React.useContext(ThemeContext);
    }
    if (typeof props.className === "string") {
      className = getRegisteredStyles(
        cache2.registered,
        classInterpolations,
        props.className
      );
    } else if (props.className != null) {
      className = cx(className, props.className);
    }
    const serialized = serializeStyles(
      styles.concat(classInterpolations),
      cache2.registered,
      mergedProps
    );
    className = cx(className, `${cache2.key}-${serialized.name}`);
    if (targetClassName !== void 0) {
      className = cx(className, targetClassName);
    }
    const shouldUseAs = !shouldForwardProp("as");
    let FinalTag = shouldUseAs && props.as || baseTag;
    let finalProps = {};
    for (let prop in props) {
      if (shouldUseAs && prop === "as") continue;
      if (isHtmlProp(prop)) {
        const nativeProp = prop.replace("html", "").toLowerCase();
        finalProps[nativeProp] = props[prop];
        continue;
      }
      if (shouldForwardProp(prop)) {
        finalProps[prop] = props[prop];
      }
    }
    finalProps.className = className.trim();
    finalProps.ref = ref;
    const forwardAsChild = options.forwardAsChild || options.forwardProps?.includes("asChild");
    if (props.asChild && !forwardAsChild) {
      const child = React.Children.only(props.children);
      FinalTag = child.type;
      finalProps.children = null;
      Reflect.deleteProperty(finalProps, "asChild");
      finalProps = mergeProps(finalProps, child.props);
      finalProps.ref = mergeRefs(ref, getElementRef(child));
    }
    if (finalProps.as && forwardAsChild) {
      finalProps.as = void 0;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(
          Insertion,
          {
            cache: cache2,
            serialized,
            isStringTag: typeof FinalTag === "string"
          }
        ),
        /* @__PURE__ */ jsx(FinalTag, { asChild: true, ...finalProps, children: /* @__PURE__ */ jsx(props.as, { children: finalProps.children }) })
      ] });
    }
    return /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx(
        Insertion,
        {
          cache: cache2,
          serialized,
          isStringTag: typeof FinalTag === "string"
        }
      ),
      /* @__PURE__ */ jsx(FinalTag, { ...finalProps })
    ] });
  });
  Styled.displayName = identifierName !== void 0 ? identifierName : `chakra(${typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component"})`;
  Styled.__emotion_real = Styled;
  Styled.__emotion_base = baseTag;
  Styled.__emotion_forwardProp = options.shouldForwardProp;
  Styled.__emotion_cva = configOrCva;
  Object.defineProperty(Styled, "toString", {
    value() {
      if (targetClassName === void 0 && process.env.NODE_ENV !== "production") {
        return "NO_COMPONENT_SELECTOR";
      }
      return `.${targetClassName}`;
    }
  });
  return Styled;
};
const styledFn = createStyled.bind();
const cache = /* @__PURE__ */ new Map();
const chakraImpl = new Proxy(styledFn, {
  apply(_, __, args) {
    return styledFn(...args);
  },
  get(_, el) {
    if (!cache.has(el)) {
      cache.set(el, styledFn(el));
    }
    return cache.get(el);
  }
});
const chakra = chakraImpl;
const mergeCva = (cvaA, cvaB) => {
  if (cvaA && !cvaB) return cvaA;
  if (!cvaA && cvaB) return cvaB;
  return cvaA.merge(cvaB);
};

export { chakra };
