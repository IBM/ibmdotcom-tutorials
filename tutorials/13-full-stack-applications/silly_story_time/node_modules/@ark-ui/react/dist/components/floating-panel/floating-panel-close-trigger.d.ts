import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelCloseTriggerBaseProps extends PolymorphicProps {
}
export interface FloatingPanelCloseTriggerProps extends HTMLProps<'button'>, FloatingPanelCloseTriggerBaseProps {
}
export declare const FloatingPanelCloseTrigger: ForwardRefExoticComponent<FloatingPanelCloseTriggerProps & RefAttributes<HTMLButtonElement>>;
