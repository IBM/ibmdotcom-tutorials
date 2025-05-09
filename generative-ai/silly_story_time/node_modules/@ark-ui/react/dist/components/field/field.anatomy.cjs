'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const anatomy = require('@zag-js/anatomy');

const fieldAnatomy = anatomy.createAnatomy("field").parts(
  "root",
  "errorText",
  "helperText",
  "input",
  "label",
  "select",
  "textarea",
  "requiredIndicator"
);
const parts = fieldAnatomy.build();

exports.fieldAnatomy = fieldAnatomy;
exports.parts = parts;
