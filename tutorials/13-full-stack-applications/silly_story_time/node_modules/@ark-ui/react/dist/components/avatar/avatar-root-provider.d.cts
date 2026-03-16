import { HTMLProps, PolymorphicProps } from '../factory';
import { UseAvatarReturn } from './use-avatar';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseAvatarReturn;
}
export interface AvatarRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface AvatarRootProviderProps extends HTMLProps<'div'>, AvatarRootProviderBaseProps {
}
export declare const AvatarRootProvider: ForwardRefExoticComponent<AvatarRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
