import { InputProps } from '@zag-js/pin-input';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PinInputInputBaseProps extends InputProps, PolymorphicProps {
}
export interface PinInputInputProps extends HTMLProps<'input'>, PinInputInputBaseProps {
}
export declare const PinInputInput: ForwardRefExoticComponent<PinInputInputProps & RefAttributes<HTMLInputElement>>;
