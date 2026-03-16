import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSwitchProps } from './use-switch';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SwitchRootBaseProps extends UseSwitchProps, PolymorphicProps {
}
export interface SwitchRootProps extends HTMLProps<'label'>, SwitchRootBaseProps {
}
export declare const SwitchRoot: ForwardRefExoticComponent<SwitchRootProps & RefAttributes<HTMLLabelElement>>;
