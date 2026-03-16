'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { ColorPickerChannelPropsProvider } from './use-color-picker-channel-props-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';
import { useColorPickerFormatPropsContext } from './use-color-picker-format-context.js';

const ColorPickerChannelSlider = forwardRef((props, ref) => {
  const [channelProps, localProps] = createSplitProps()(props, ["channel", "orientation"]);
  const colorPicker = useColorPickerContext();
  const formatProps = useColorPickerFormatPropsContext();
  const channelSliderProps = { ...channelProps, ...formatProps };
  const mergedProps = mergeProps(colorPicker.getChannelSliderProps(channelSliderProps), localProps);
  return /* @__PURE__ */ jsx(ColorPickerChannelPropsProvider, { value: channelProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) });
});
ColorPickerChannelSlider.displayName = "ColorPickerChannelSlider";

export { ColorPickerChannelSlider };
