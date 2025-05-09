import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SegmentGroupItemControlBaseProps extends PolymorphicProps {
}
export interface SegmentGroupItemControlProps extends HTMLProps<'div'>, SegmentGroupItemControlBaseProps {
}
export declare const SegmentGroupItemControl: ForwardRefExoticComponent<SegmentGroupItemControlProps & RefAttributes<HTMLDivElement>>;
