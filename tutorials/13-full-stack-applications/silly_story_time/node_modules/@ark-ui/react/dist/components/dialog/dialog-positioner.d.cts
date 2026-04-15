import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DialogPositionerBaseProps extends PolymorphicProps {
}
export interface DialogPositionerProps extends HTMLProps<'div'>, DialogPositionerBaseProps {
}
export declare const DialogPositioner: ForwardRefExoticComponent<DialogPositionerProps & RefAttributes<HTMLDivElement>>;
