import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelControlBaseProps extends PolymorphicProps {
}
export interface FloatingPanelControlProps extends HTMLProps<'div'>, FloatingPanelControlBaseProps {
}
export declare const FloatingPanelControl: ForwardRefExoticComponent<FloatingPanelControlProps & RefAttributes<HTMLDivElement>>;
