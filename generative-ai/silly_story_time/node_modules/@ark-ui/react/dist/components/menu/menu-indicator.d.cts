import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuIndicatorBaseProps extends PolymorphicProps {
}
export interface MenuIndicatorProps extends HTMLProps<'div'>, MenuIndicatorBaseProps {
}
export declare const MenuIndicator: ForwardRefExoticComponent<MenuIndicatorProps & RefAttributes<HTMLDivElement>>;
