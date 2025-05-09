import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelTriggerBaseProps extends PolymorphicProps {
}
export interface FloatingPanelTriggerProps extends HTMLProps<'button'>, FloatingPanelTriggerBaseProps {
}
export declare const FloatingPanelTrigger: ForwardRefExoticComponent<FloatingPanelTriggerProps & RefAttributes<HTMLButtonElement>>;
