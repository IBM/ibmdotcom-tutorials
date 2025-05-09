'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useAvatarContext } from './use-avatar-context.js';

const AvatarFallback = forwardRef((props, ref) => {
  const avatar = useAvatarContext();
  const mergedProps = mergeProps(avatar.getFallbackProps(), props);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref });
});
AvatarFallback.displayName = "AvatarFallback";

export { AvatarFallback };
