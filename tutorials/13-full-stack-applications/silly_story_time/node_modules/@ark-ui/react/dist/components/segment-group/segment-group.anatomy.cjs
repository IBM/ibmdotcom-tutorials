'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const radio = require('@zag-js/radio-group');

const segmentGroupAnatomy = radio.anatomy.rename("segment-group");
const parts = segmentGroupAnatomy.build();

exports.parts = parts;
exports.segmentGroupAnatomy = segmentGroupAnatomy;
