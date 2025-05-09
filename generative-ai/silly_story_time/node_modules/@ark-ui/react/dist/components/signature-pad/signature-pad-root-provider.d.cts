import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSignaturePadReturn } from './use-signature-pad';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseSignaturePadReturn;
}
export interface SignaturePadRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface SignaturePadRootProviderProps extends HTMLProps<'div'>, SignaturePadRootProviderBaseProps {
}
export declare const SignaturePadRootProvider: ForwardRefExoticComponent<SignaturePadRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
