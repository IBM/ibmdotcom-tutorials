import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldTextareaBaseProps extends PolymorphicProps {
    /**
     * Whether the textarea should autoresize
     * @default false
     */
    autoresize?: boolean;
}
export interface FieldTextareaProps extends HTMLProps<'textarea'>, FieldTextareaBaseProps {
}
export declare const FieldTextarea: ForwardRefExoticComponent<FieldTextareaProps & RefAttributes<HTMLTextAreaElement>>;
