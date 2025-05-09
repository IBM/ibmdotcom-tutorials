import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PinInputHiddenInputBaseProps extends PolymorphicProps {
}
export interface PinInputHiddenInputProps extends HTMLProps<'input'>, PinInputHiddenInputBaseProps {
}
export declare const PinInputHiddenInput: ForwardRefExoticComponent<PinInputHiddenInputProps & RefAttributes<HTMLInputElement>>;
