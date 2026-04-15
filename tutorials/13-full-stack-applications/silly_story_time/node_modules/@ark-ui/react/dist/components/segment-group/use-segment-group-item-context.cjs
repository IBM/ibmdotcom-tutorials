'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SegmentGroupItemProvider, useSegmentGroupItemContext] = createContext.createContext({
  name: "SegmentGroupItemContext",
  hookName: "useSegmentGroupItemContext",
  providerName: "<SegmentGroupItemProvider />"
});

exports.SegmentGroupItemProvider = SegmentGroupItemProvider;
exports.useSegmentGroupItemContext = useSegmentGroupItemContext;
