import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ClipboardControlBaseProps extends PolymorphicProps {
}
export interface ClipboardControlProps extends HTMLProps<'div'>, ClipboardControlBaseProps {
}
export declare const ClipboardControl: ForwardRefExoticComponent<ClipboardControlProps & RefAttributes<HTMLDivElement>>;
