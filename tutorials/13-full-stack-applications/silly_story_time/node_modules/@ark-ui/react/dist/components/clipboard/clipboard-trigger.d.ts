import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ClipboardTriggerBaseProps extends PolymorphicProps {
}
export interface ClipboardTriggerProps extends HTMLProps<'button'>, ClipboardTriggerBaseProps {
}
export declare const ClipboardTrigger: ForwardRefExoticComponent<ClipboardTriggerProps & RefAttributes<HTMLButtonElement>>;
