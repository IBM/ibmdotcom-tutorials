'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';
import { ark } from '../factory.js';
import { useColorPickerChannelPropsContext } from './use-color-picker-channel-props-context.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerChannelSliderValueText = forwardRef(
  (props, ref) => {
    const { locale } = useLocaleContext();
    const colorPicker = useColorPickerContext();
    const channelProps = useColorPickerChannelPropsContext();
    const mergedProps = mergeProps(colorPicker.getChannelSliderValueTextProps(channelProps), props);
    return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: props.children || colorPicker.getChannelValueText(channelProps.channel, locale) });
  }
);
ColorPickerChannelSliderValueText.displayName = "ColorPickerChannelSliderValueText";

export { ColorPickerChannelSliderValueText };
