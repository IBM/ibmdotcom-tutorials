import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SwitchLabelBaseProps extends PolymorphicProps {
}
export interface SwitchLabelProps extends HTMLProps<'span'>, SwitchLabelBaseProps {
}
export declare const SwitchLabel: ForwardRefExoticComponent<SwitchLabelProps & RefAttributes<HTMLSpanElement>>;
