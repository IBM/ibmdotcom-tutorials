import { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';
import { HTMLProps, PolymorphicProps } from '../factory';
export interface ClipboardIndicatorBaseProps extends PolymorphicProps {
    copied?: ReactNode;
}
export interface ClipboardIndicatorProps extends HTMLProps<'div'>, ClipboardIndicatorBaseProps {
}
export declare const ClipboardIndicator: ForwardRefExoticComponent<ClipboardIndicatorProps & RefAttributes<HTMLDivElement>>;
