import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSignaturePadProps } from './use-signature-pad';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SignaturePadRootBaseProps extends UseSignaturePadProps, PolymorphicProps {
}
export interface SignaturePadRootProps extends HTMLProps<'div'>, SignaturePadRootBaseProps {
}
export declare const SignaturePadRoot: ForwardRefExoticComponent<SignaturePadRootProps & RefAttributes<HTMLDivElement>>;
