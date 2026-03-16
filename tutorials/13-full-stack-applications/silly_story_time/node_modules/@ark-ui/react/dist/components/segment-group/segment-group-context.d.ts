import { ReactNode } from 'react';
import { UseSegmentGroupContext } from './use-segment-group-context';
export interface SegmentGroupContextProps {
    children: (context: UseSegmentGroupContext) => ReactNode;
}
export declare const SegmentGroupContext: (props: SegmentGroupContextProps) => ReactNode;
