import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SegmentGroupIndicatorBaseProps extends PolymorphicProps {
}
export interface SegmentGroupIndicatorProps extends HTMLProps<'div'>, SegmentGroupIndicatorBaseProps {
}
export declare const SegmentGroupIndicator: ForwardRefExoticComponent<SegmentGroupIndicatorProps & RefAttributes<HTMLDivElement>>;
