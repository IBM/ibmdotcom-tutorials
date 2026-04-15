import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SignaturePadControlBaseProps extends PolymorphicProps {
}
export interface SignaturePadControlProps extends HTMLProps<'div'>, SignaturePadControlBaseProps {
}
export declare const SignaturePadControl: ForwardRefExoticComponent<SignaturePadControlProps & RefAttributes<HTMLDivElement>>;
