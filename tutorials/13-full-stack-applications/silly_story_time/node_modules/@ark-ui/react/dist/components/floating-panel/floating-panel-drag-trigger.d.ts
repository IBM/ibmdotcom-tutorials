import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelDragTriggerBaseProps extends PolymorphicProps {
}
export interface FloatingPanelDragTriggerProps extends HTMLProps<'div'>, FloatingPanelDragTriggerBaseProps {
}
export declare const FloatingPanelDragTrigger: ForwardRefExoticComponent<FloatingPanelDragTriggerProps & RefAttributes<HTMLDivElement>>;
