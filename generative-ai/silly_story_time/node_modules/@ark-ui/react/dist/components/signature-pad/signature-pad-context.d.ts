import { ReactNode } from 'react';
import { UseSignaturePadContext } from './use-signature-pad-context';
export interface SignaturePadContextProps {
    children: (context: UseSignaturePadContext) => ReactNode;
}
export declare const SignaturePadContext: (props: SignaturePadContextProps) => ReactNode;
