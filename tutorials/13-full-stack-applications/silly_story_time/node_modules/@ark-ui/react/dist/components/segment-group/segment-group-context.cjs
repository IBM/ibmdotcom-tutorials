'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useSegmentGroupContext = require('./use-segment-group-context.cjs');

const SegmentGroupContext = (props) => props.children(useSegmentGroupContext.useSegmentGroupContext());

exports.SegmentGroupContext = SegmentGroupContext;
