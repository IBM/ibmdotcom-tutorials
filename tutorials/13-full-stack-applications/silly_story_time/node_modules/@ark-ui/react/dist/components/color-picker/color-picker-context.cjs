'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useColorPickerContext = require('./use-color-picker-context.cjs');

const ColorPickerContext = (props) => props.children(useColorPickerContext.useColorPickerContext());

exports.ColorPickerContext = ColorPickerContext;
