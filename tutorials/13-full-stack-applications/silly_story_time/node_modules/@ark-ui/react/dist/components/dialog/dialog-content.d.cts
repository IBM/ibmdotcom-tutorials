import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DialogContentBaseProps extends PolymorphicProps {
}
export interface DialogContentProps extends HTMLProps<'div'>, DialogContentBaseProps {
}
export declare const DialogContent: ForwardRefExoticComponent<DialogContentProps & RefAttributes<HTMLDivElement>>;
