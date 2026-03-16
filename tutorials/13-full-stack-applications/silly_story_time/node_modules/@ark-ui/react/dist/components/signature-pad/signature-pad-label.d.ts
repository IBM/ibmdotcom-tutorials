import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SignaturePadLabelBaseProps extends PolymorphicProps {
}
export interface SignaturePadLabelProps extends HTMLProps<'label'>, SignaturePadLabelBaseProps {
}
export declare const SignaturePadLabel: ForwardRefExoticComponent<SignaturePadLabelProps & RefAttributes<HTMLLabelElement>>;
