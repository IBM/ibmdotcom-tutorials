import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DialogDescriptionBaseProps extends PolymorphicProps {
}
export interface DialogDescriptionProps extends HTMLProps<'div'>, DialogDescriptionBaseProps {
}
export declare const DialogDescription: ForwardRefExoticComponent<DialogDescriptionProps & RefAttributes<HTMLDivElement>>;
