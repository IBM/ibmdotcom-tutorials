import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelHeaderBaseProps extends PolymorphicProps {
}
export interface FloatingPanelHeaderProps extends HTMLProps<'div'>, FloatingPanelHeaderBaseProps {
}
export declare const FloatingPanelHeader: ForwardRefExoticComponent<FloatingPanelHeaderProps & RefAttributes<HTMLDivElement>>;
