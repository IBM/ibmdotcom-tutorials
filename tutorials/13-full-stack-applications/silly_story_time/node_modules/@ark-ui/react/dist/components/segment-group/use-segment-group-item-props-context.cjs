'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SegmentGroupItemPropsProvider, useSegmentGroupItemPropsContext] = createContext.createContext({
  name: "SegmentGroupItemPropsContext",
  hookName: "useSegmentGroupItemPropsContext",
  providerName: "<SegmentGroupItemPropsProvider />"
});

exports.SegmentGroupItemPropsProvider = SegmentGroupItemPropsProvider;
exports.useSegmentGroupItemPropsContext = useSegmentGroupItemPropsContext;
