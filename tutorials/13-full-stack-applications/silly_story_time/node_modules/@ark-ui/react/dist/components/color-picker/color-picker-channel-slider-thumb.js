'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useColorPickerChannelPropsContext } from './use-color-picker-channel-props-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';
import { useColorPickerFormatPropsContext } from './use-color-picker-format-context.js';

const ColorPickerChannelSliderThumb = forwardRef(
  (props, ref) => {
    const colorPicker = useColorPickerContext();
    const channelProps = useColorPickerChannelPropsContext();
    const formatProps = useColorPickerFormatPropsContext();
    const channelSliderProps = { ...channelProps, ...formatProps };
    const mergedProps = mergeProps(colorPicker.getChannelSliderThumbProps(channelSliderProps), props);
    return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
  }
);
ColorPickerChannelSliderThumb.displayName = "ColorPickerChannelSliderThumb";

export { ColorPickerChannelSliderThumb };
