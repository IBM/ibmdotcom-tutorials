import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePinInputReturn } from './use-pin-input';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UsePinInputReturn;
}
export interface PinInputRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface PinInputRootProviderProps extends HTMLProps<'div'>, PinInputRootProviderBaseProps {
}
export declare const PinInputRootProvider: ForwardRefExoticComponent<PinInputRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
