'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useAvatar = require('./use-avatar.cjs');
const useAvatarContext = require('./use-avatar-context.cjs');

const AvatarRoot = react.forwardRef((props, ref) => {
  const [useAvatarProps, localProps] = createSplitProps.createSplitProps()(props, ["id", "ids", "onStatusChange"]);
  const avatar = useAvatar.useAvatar(useAvatarProps);
  const mergedProps = react$1.mergeProps(avatar.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useAvatarContext.AvatarProvider, { value: avatar, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
});
AvatarRoot.displayName = "AvatarRoot";

exports.AvatarRoot = AvatarRoot;
