import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsSeparatorBaseProps extends PolymorphicProps {
}
export interface StepsSeparatorProps extends HTMLProps<'div'>, StepsSeparatorBaseProps {
}
export declare const StepsSeparator: ForwardRefExoticComponent<StepsSeparatorProps & RefAttributes<HTMLDivElement>>;
