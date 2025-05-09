'use client';
import { useSegmentGroupContext } from './use-segment-group-context.js';

const SegmentGroupContext = (props) => props.children(useSegmentGroupContext());

export { SegmentGroupContext };
