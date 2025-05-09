'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useMenuContext = require('./use-menu-context.cjs');

const MenuIndicator = react.forwardRef((props, ref) => {
  const menu = useMenuContext.useMenuContext();
  const mergedProps = react$1.mergeProps(menu.getIndicatorProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
MenuIndicator.displayName = "MenuIndicator";

exports.MenuIndicator = MenuIndicator;
