'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerContent = forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(colorPicker.getContentProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref) });
});
ColorPickerContent.displayName = "ColorPickerContent";

export { ColorPickerContent };
