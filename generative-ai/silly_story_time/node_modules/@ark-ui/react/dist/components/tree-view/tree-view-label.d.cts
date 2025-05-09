import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TreeViewLabelBaseProps extends PolymorphicProps {
}
export interface TreeViewLabelProps extends HTMLProps<'label'>, TreeViewLabelBaseProps {
}
export declare const TreeViewLabel: ForwardRefExoticComponent<TreeViewLabelProps & RefAttributes<HTMLLabelElement>>;
