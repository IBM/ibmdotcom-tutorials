import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FloatingPanelBodyBaseProps extends PolymorphicProps {
}
export interface FloatingPanelBodyProps extends HTMLProps<'div'>, FloatingPanelBodyBaseProps {
}
export declare const FloatingPanelBody: ForwardRefExoticComponent<FloatingPanelBodyProps & RefAttributes<HTMLDivElement>>;
