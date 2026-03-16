'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useSegmentGroupItemContext = require('./use-segment-group-item-context.cjs');

const SegmentGroupItemContext = (props) => props.children(useSegmentGroupItemContext.useSegmentGroupItemContext());

exports.SegmentGroupItemContext = SegmentGroupItemContext;
