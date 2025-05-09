'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@zag-js/core');
const react = require('react');
const composeRefs = require('../utils/compose-refs.cjs');

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
  const Comp = react.memo(
    react.forwardRef((props, ref) => {
      const { asChild, children, ...restProps } = props;
      if (!asChild) {
        return react.createElement(Component, { ...restProps, ref }, children);
      }
      const onlyChild = react.Children.only(children);
      if (!react.isValidElement(onlyChild)) {
        return null;
      }
      const childRef = getRef(onlyChild);
      return react.cloneElement(onlyChild, {
        ...core.mergeProps(restProps, onlyChild.props),
        ref: ref ? composeRefs.composeRefs(ref, childRef) : childRef
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

exports.ark = ark;
exports.jsxFactory = jsxFactory;
