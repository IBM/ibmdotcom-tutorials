import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CheckboxIndicatorBaseProps extends PolymorphicProps {
    indeterminate?: boolean;
}
export interface CheckboxIndicatorProps extends HTMLProps<'div'>, CheckboxIndicatorBaseProps {
}
export declare const CheckboxIndicator: ForwardRefExoticComponent<CheckboxIndicatorProps & RefAttributes<HTMLDivElement>>;
