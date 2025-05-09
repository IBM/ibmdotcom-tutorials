'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerChannelInput = forwardRef((props, ref) => {
  const [channelProps, localProps] = createSplitProps()(props, ["channel", "orientation"]);
  const colorPicker = useColorPickerContext();
  const mergedProps = mergeProps(colorPicker.getChannelInputProps(channelProps), localProps);
  return /* @__PURE__ */ jsx(ark.input, { ...mergedProps, ref });
});
ColorPickerChannelInput.displayName = "ColorPickerChannelInput";

export { ColorPickerChannelInput };
