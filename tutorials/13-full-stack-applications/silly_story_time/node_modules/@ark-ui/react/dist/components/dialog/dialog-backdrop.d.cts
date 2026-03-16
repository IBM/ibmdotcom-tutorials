import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DialogBackdropBaseProps extends PolymorphicProps {
}
export interface DialogBackdropProps extends HTMLProps<'div'>, DialogBackdropBaseProps {
}
export declare const DialogBackdrop: ForwardRefExoticComponent<DialogBackdropProps & RefAttributes<HTMLDivElement>>;
