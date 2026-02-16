'use client';
import { useSegmentGroupItemContext } from './use-segment-group-item-context.js';

const SegmentGroupItemContext = (props) => props.children(useSegmentGroupItemContext());

export { SegmentGroupItemContext };
