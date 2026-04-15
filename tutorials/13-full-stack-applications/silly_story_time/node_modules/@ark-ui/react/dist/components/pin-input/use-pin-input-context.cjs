'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [PinInputProvider, usePinInputContext] = createContext.createContext({
  name: "PinInputContext",
  hookName: "usePinInputContext",
  providerName: "<PinInputProvider />"
});

exports.PinInputProvider = PinInputProvider;
exports.usePinInputContext = usePinInputContext;
