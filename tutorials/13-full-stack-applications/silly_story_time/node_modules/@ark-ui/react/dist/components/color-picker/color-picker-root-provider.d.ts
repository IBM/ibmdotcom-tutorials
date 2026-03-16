import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseColorPickerReturn } from './use-color-picker';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseColorPickerReturn;
}
export interface ColorPickerRootProviderBaseProps extends RootProviderProps, UsePresenceProps, PolymorphicProps {
}
export interface ColorPickerRootProviderProps extends HTMLProps<'div'>, ColorPickerRootProviderBaseProps {
}
export declare const ColorPickerRootProvider: ForwardRefExoticComponent<ColorPickerRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
