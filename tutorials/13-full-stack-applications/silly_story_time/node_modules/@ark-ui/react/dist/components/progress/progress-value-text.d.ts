import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressValueTextBaseProps extends PolymorphicProps {
}
export interface ProgressValueTextProps extends HTMLProps<'span'>, ProgressValueTextBaseProps {
}
export declare const ProgressValueText: ForwardRefExoticComponent<ProgressValueTextProps & RefAttributes<HTMLSpanElement>>;
