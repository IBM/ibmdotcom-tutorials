'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerTransparencyGrid = forwardRef(
  (props, ref) => {
    const [gridProps, localProps] = createSplitProps()(props, ["size"]);
    const colorPicker = useColorPickerContext();
    const mergedProps = mergeProps(colorPicker.getTransparencyGridProps(gridProps), localProps);
    return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
  }
);
ColorPickerTransparencyGrid.displayName = "ColorPickerTransparencyGrid";

export { ColorPickerTransparencyGrid };
