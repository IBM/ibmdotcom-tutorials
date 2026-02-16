'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { ColorPickerAreaPropsProvider } from './use-color-picker-area-props-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerArea = forwardRef((props, ref) => {
  const [areaProps, localProps] = createSplitProps()(props, ["xChannel", "yChannel"]);
  const colorPicker = useColorPickerContext();
  const mergedProps = mergeProps(colorPicker.getAreaProps(areaProps), localProps);
  return /* @__PURE__ */ jsx(ColorPickerAreaPropsProvider, { value: areaProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ColorPickerArea.displayName = "ColorPickerArea";

export { ColorPickerArea };
