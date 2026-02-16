import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface MenuSeparatorBaseProps extends PolymorphicProps {
}
export interface MenuSeparatorProps extends HTMLProps<'hr'>, MenuSeparatorBaseProps {
}
export declare const MenuSeparator: ForwardRefExoticComponent<MenuSeparatorProps & RefAttributes<HTMLHRElement>>;
