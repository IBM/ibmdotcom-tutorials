import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SegmentGroupLabelBaseProps extends PolymorphicProps {
}
export interface SegmentGroupLabelProps extends HTMLProps<'label'>, SegmentGroupLabelBaseProps {
}
export declare const SegmentGroupLabel: ForwardRefExoticComponent<SegmentGroupLabelProps & RefAttributes<HTMLLabelElement>>;
