'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerPositioner = forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext();
  const mergedProps = mergeProps(colorPicker.getPositionerProps(), props);
  const presence = usePresenceContext();
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ColorPickerPositioner.displayName = "ColorPickerPositioner";

export { ColorPickerPositioner };
