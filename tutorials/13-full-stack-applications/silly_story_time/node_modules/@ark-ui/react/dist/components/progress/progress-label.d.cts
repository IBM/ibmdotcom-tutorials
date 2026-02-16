import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ProgressLabelBaseProps extends PolymorphicProps {
}
export interface ProgressLabelProps extends HTMLProps<'label'>, ProgressLabelBaseProps {
}
export declare const ProgressLabel: ForwardRefExoticComponent<ProgressLabelProps & RefAttributes<HTMLLabelElement>>;
