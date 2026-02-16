'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useAvatarContext = require('./use-avatar-context.cjs');

const AvatarRootProvider = react.forwardRef((props, ref) => {
  const [{ value: avatar }, localProps] = createSplitProps.createSplitProps()(props, ["value"]);
  const mergedProps = react$1.mergeProps(avatar.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useAvatarContext.AvatarProvider, { value: avatar, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
AvatarRootProvider.displayName = "AvatarRootProvider";

exports.AvatarRootProvider = AvatarRootProvider;
