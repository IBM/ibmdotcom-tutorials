import { HTMLProps, PolymorphicProps } from '../factory';
import { UseClipboardReturn } from './use-clipboard';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseClipboardReturn;
}
export interface ClipboardRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface ClipboardRootProviderProps extends HTMLProps<'div'>, ClipboardRootProviderBaseProps {
}
export declare const ClipboardRootProvider: ForwardRefExoticComponent<ClipboardRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
