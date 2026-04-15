import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ClipboardValueTextBaseProps extends PolymorphicProps {
}
export interface ClipboardValueTextProps extends HTMLProps<'span'>, ClipboardValueTextBaseProps {
}
export declare const ClipboardValueText: ForwardRefExoticComponent<ClipboardValueTextProps & RefAttributes<HTMLDivElement>>;
