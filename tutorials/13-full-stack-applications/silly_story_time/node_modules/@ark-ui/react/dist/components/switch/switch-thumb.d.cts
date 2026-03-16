import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SwitchThumbBaseProps extends PolymorphicProps {
}
export interface SwitchThumbProps extends HTMLProps<'span'>, SwitchThumbBaseProps {
}
export declare const SwitchThumb: ForwardRefExoticComponent<SwitchThumbProps & RefAttributes<HTMLSpanElement>>;
