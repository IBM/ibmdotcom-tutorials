'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useColorPickerChannelPropsContext } from './use-color-picker-channel-props-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerChannelSliderLabel = forwardRef(
  (props, ref) => {
    const colorPicker = useColorPickerContext();
    const channelProps = useColorPickerChannelPropsContext();
    const mergedProps = mergeProps(colorPicker.getChannelSliderLabelProps(channelProps), props);
    return /* @__PURE__ */ jsx(ark.label, { ...mergedProps, ref });
  }
);
ColorPickerChannelSliderLabel.displayName = "ColorPickerChannelSliderLabel";

export { ColorPickerChannelSliderLabel };
