import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SignaturePadClearTriggerBaseProps extends PolymorphicProps {
}
export interface SignaturePadClearTriggerProps extends HTMLProps<'button'>, SignaturePadClearTriggerBaseProps {
}
export declare const SignaturePadClearTrigger: ForwardRefExoticComponent<SignaturePadClearTriggerProps & RefAttributes<HTMLButtonElement>>;
