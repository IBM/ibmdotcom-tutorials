import { HiddenInputProps } from '@zag-js/signature-pad';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SignaturePadHiddenInputBaseProps extends HiddenInputProps, PolymorphicProps {
}
export interface SignaturePadHiddenInputProps extends Assign<HTMLProps<'input'>, SignaturePadHiddenInputBaseProps> {
}
export declare const SignaturePadHiddenInput: ForwardRefExoticComponent<SignaturePadHiddenInputProps & RefAttributes<HTMLInputElement>>;
