'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useColorPickerAreaPropsContext } from './use-color-picker-area-props-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerAreaBackground = forwardRef((props, ref) => {
  const colorPicker = useColorPickerContext();
  const areaProps = useColorPickerAreaPropsContext();
  const mergedProps = mergeProps(colorPicker.getAreaBackgroundProps(areaProps), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
ColorPickerAreaBackground.displayName = "ColorPickerAreaBackground";

export { ColorPickerAreaBackground };
