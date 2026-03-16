'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const anatomy = require('@zag-js/anatomy');

const fieldsetAnatomy = anatomy.createAnatomy("fieldset").parts("root", "errorText", "helperText", "legend");
const parts = fieldsetAnatomy.build();

exports.fieldsetAnatomy = fieldsetAnatomy;
exports.parts = parts;
