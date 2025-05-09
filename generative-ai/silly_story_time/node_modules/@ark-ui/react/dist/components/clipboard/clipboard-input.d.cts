import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ClipboardInputBaseProps extends PolymorphicProps {
}
export interface ClipboardInputProps extends HTMLProps<'input'>, ClipboardInputBaseProps {
}
export declare const ClipboardInput: ForwardRefExoticComponent<ClipboardInputProps & RefAttributes<HTMLInputElement>>;
