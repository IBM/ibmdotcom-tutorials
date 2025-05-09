import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelPositionerBaseProps extends PolymorphicProps {
}
export interface FloatingPanelPositionerProps extends HTMLProps<'div'>, FloatingPanelPositionerBaseProps {
}
export declare const FloatingPanelPositioner: ForwardRefExoticComponent<FloatingPanelPositionerProps & RefAttributes<HTMLDivElement>>;
