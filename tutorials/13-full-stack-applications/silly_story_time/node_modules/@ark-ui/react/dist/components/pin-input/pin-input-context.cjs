'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const usePinInputContext = require('./use-pin-input-context.cjs');

const PinInputContext = (props) => props.children(usePinInputContext.usePinInputContext());

exports.PinInputContext = PinInputContext;
