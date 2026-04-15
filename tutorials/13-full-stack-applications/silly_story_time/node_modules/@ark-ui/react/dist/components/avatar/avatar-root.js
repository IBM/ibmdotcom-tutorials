'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useAvatar } from './use-avatar.js';
import { AvatarProvider } from './use-avatar-context.js';

const AvatarRoot = forwardRef((props, ref) => {
  const [useAvatarProps, localProps] = createSplitProps()(props, ["id", "ids", "onStatusChange"]);
  const avatar = useAvatar(useAvatarProps);
  const mergedProps = mergeProps(avatar.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(AvatarProvider, { value: avatar, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
AvatarRoot.displayName = "AvatarRoot";

export { AvatarRoot };
