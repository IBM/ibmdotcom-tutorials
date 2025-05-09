'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SegmentGroupProvider, useSegmentGroupContext] = createContext.createContext({
  name: "SegmentGroupContext",
  hookName: "useSegmentGroupContext",
  providerName: "<SegmentGroupProvider />"
});

exports.SegmentGroupProvider = SegmentGroupProvider;
exports.useSegmentGroupContext = useSegmentGroupContext;
