import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SegmentGroupItemHiddenInputBaseProps extends PolymorphicProps {
}
export interface SegmentGroupItemHiddenInputProps extends HTMLProps<'input'>, SegmentGroupItemHiddenInputBaseProps {
}
export declare const SegmentGroupItemHiddenInput: ForwardRefExoticComponent<SegmentGroupItemHiddenInputProps & RefAttributes<HTMLInputElement>>;
