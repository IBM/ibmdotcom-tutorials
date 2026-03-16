import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SwitchHiddenInputBaseProps extends PolymorphicProps {
}
export interface SwitchHiddenInputProps extends HTMLProps<'input'>, SwitchHiddenInputBaseProps {
}
export declare const SwitchHiddenInput: ForwardRefExoticComponent<SwitchHiddenInputProps & RefAttributes<HTMLInputElement>>;
