import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelContentBaseProps extends PolymorphicProps {
}
export interface FloatingPanelContentProps extends HTMLProps<'div'>, FloatingPanelContentBaseProps {
}
export declare const FloatingPanelContent: ForwardRefExoticComponent<FloatingPanelContentProps & RefAttributes<HTMLDivElement>>;
