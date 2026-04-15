'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { AvatarProvider } from './use-avatar-context.js';

const AvatarRootProvider = forwardRef((props, ref) => {
  const [{ value: avatar }, localProps] = createSplitProps()(props, ["value"]);
  const mergedProps = mergeProps(avatar.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(AvatarProvider, { value: avatar, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
AvatarRootProvider.displayName = "AvatarRootProvider";

export { AvatarRootProvider };
