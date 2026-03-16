import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewItemIndicatorBaseProps extends PolymorphicProps {
}
export interface TreeViewItemIndicatorProps extends HTMLProps<'div'>, TreeViewItemIndicatorBaseProps {
}
export declare const TreeViewItemIndicator: ForwardRefExoticComponent<TreeViewItemIndicatorProps & RefAttributes<HTMLDivElement>>;
