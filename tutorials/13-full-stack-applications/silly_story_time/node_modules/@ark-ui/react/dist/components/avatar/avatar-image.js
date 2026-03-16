'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useAvatarContext } from './use-avatar-context.js';

const AvatarImage = forwardRef((props, ref) => {
  const avatar = useAvatarContext();
  const mergedProps = mergeProps(avatar.getImageProps(), props);
  return /* @__PURE__ */ jsx(ark.img, { ...mergedProps, ref });
});
AvatarImage.displayName = "AvatarImage";

export { AvatarImage };
