import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ClipboardLabelBaseProps extends PolymorphicProps {
}
export interface ClipboardLabelProps extends HTMLProps<'label'>, ClipboardLabelBaseProps {
}
export declare const ClipboardLabel: ForwardRefExoticComponent<ClipboardLabelProps & RefAttributes<HTMLLabelElement>>;
