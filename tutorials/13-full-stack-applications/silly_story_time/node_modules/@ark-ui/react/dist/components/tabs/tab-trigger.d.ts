import { TriggerProps } from '@zag-js/tabs';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TabTriggerBaseProps extends TriggerProps, PolymorphicProps {
}
export interface TabTriggerProps extends Assign<HTMLProps<'button'>, TabTriggerBaseProps> {
}
export declare const TabTrigger: ForwardRefExoticComponent<TabTriggerProps & RefAttributes<HTMLButtonElement>>;
