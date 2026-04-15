import { ReactNode } from 'react';
import { UseSegmentGroupItemContext } from './use-segment-group-item-context';
export interface SegmentGroupItemContextProps {
    children: (context: UseSegmentGroupItemContext) => ReactNode;
}
export declare const SegmentGroupItemContext: (props: SegmentGroupItemContextProps) => ReactNode;
