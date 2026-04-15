import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SwitchControlBaseProps extends PolymorphicProps {
}
export interface SwitchControlProps extends HTMLProps<'span'>, SwitchControlBaseProps {
}
export declare const SwitchControl: ForwardRefExoticComponent<SwitchControlProps & RefAttributes<HTMLSpanElement>>;
