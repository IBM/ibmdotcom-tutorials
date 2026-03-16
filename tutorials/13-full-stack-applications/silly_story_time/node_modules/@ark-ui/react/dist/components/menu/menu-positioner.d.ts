import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuPositionerBaseProps extends PolymorphicProps {
}
export interface MenuPositionerProps extends HTMLProps<'div'>, MenuPositionerBaseProps {
}
export declare const MenuPositioner: ForwardRefExoticComponent<MenuPositionerProps & RefAttributes<HTMLDivElement>>;
