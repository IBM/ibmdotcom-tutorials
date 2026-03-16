import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuArrowTipBaseProps extends PolymorphicProps {
}
export interface MenuArrowTipProps extends HTMLProps<'div'>, MenuArrowTipBaseProps {
}
export declare const MenuArrowTip: ForwardRefExoticComponent<MenuArrowTipProps & RefAttributes<HTMLDivElement>>;
