import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressRangeBaseProps extends PolymorphicProps {
}
export interface ProgressRangeProps extends HTMLProps<'div'>, ProgressRangeBaseProps {
}
export declare const ProgressRange: ForwardRefExoticComponent<ProgressRangeProps & RefAttributes<HTMLDivElement>>;
