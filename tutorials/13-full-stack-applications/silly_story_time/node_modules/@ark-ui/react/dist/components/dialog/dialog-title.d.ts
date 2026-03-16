import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DialogTitleBaseProps extends PolymorphicProps {
}
export interface DialogTitleProps extends HTMLProps<'h2'>, DialogTitleBaseProps {
}
export declare const DialogTitle: ForwardRefExoticComponent<DialogTitleProps & RefAttributes<HTMLHeadingElement>>;
