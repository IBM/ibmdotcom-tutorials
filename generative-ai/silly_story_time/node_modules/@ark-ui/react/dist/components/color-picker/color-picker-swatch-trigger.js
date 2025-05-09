'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerSwatchTrigger = forwardRef((props, ref) => {
  const [triggerProps, localProps] = createSplitProps()(props, ["value", "disabled"]);
  const colorPicker = useColorPickerContext();
  const mergedProps = mergeProps(colorPicker.getSwatchTriggerProps(triggerProps), localProps);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
ColorPickerSwatchTrigger.displayName = "ColorPickerSwatchTrigger";

export { ColorPickerSwatchTrigger };
