'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const formatByte = require('./format-byte.cjs');
const formatNumber = require('./format-number.cjs');



exports.Byte = formatByte.FormatByte;
exports.Number = formatNumber.FormatNumber;
