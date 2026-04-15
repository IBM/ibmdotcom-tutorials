import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SegmentGroupItemTextBaseProps extends PolymorphicProps {
}
export interface SegmentGroupItemTextProps extends HTMLProps<'span'>, SegmentGroupItemTextBaseProps {
}
export declare const SegmentGroupItemText: ForwardRefExoticComponent<SegmentGroupItemTextProps & RefAttributes<HTMLSpanElement>>;
