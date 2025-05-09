import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseColorPickerProps } from './use-color-picker';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerRootBaseProps extends UseColorPickerProps, UsePresenceProps, PolymorphicProps {
}
export interface ColorPickerRootProps extends Assign<HTMLProps<'div'>, ColorPickerRootBaseProps> {
}
export declare const ColorPickerRoot: ForwardRefExoticComponent<ColorPickerRootProps & RefAttributes<HTMLDivElement>>;
