import { mergeProps } from '@zag-js/core';
import { memo, forwardRef, createElement, Children, isValidElement, cloneElement } from 'react';
import { composeRefs } from '../utils/compose-refs.js';

function getRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
const withAsChild = (Component) => {
  const Comp = memo(
    forwardRef((props, ref) => {
      const { asChild, children, ...restProps } = props;
      if (!asChild) {
        return createElement(Component, { ...restProps, ref }, children);
      }
      const onlyChild = Children.only(children);
      if (!isValidElement(onlyChild)) {
        return null;
      }
      const childRef = getRef(onlyChild);
      return cloneElement(onlyChild, {
        ...mergeProps(restProps, onlyChild.props),
        ref: ref ? composeRefs(ref, childRef) : childRef
      });
    })
  );
  Comp.displayName = Component.displayName || Component.name;
  return Comp;
};
const jsxFactory = () => {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(withAsChild, {
    apply(_target, _thisArg, argArray) {
      return withAsChild(argArray[0]);
    },
    get(_, element) {
      const asElement = element;
      if (!cache.has(asElement)) {
        cache.set(asElement, withAsChild(asElement));
      }
      return cache.get(asElement);
    }
  });
};
const ark = jsxFactory();

export { ark, jsxFactory };
