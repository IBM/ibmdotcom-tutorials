import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelTitleBaseProps extends PolymorphicProps {
}
export interface FloatingPanelTitleProps extends HTMLProps<'h2'>, FloatingPanelTitleBaseProps {
}
export declare const FloatingPanelTitle: ForwardRefExoticComponent<FloatingPanelTitleProps & RefAttributes<HTMLDivElement>>;
