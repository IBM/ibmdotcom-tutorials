'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const anatomy = require('@zag-js/anatomy');

const toggleAnatomy = anatomy.createAnatomy("toggle", ["root", "indicator"]);
toggleAnatomy.build();

exports.toggleAnatomy = toggleAnatomy;
