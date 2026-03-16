'use client';
import { useColorPickerContext } from './use-color-picker-context.js';

const ColorPickerContext = (props) => props.children(useColorPickerContext());

export { ColorPickerContext };
