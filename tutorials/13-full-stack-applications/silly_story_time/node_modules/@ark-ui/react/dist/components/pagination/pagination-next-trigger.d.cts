import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PaginationNextTriggerBaseProps extends PolymorphicProps {
}
export interface PaginationNextTriggerProps extends HTMLProps<'button'>, PaginationNextTriggerBaseProps {
}
export declare const PaginationNextTrigger: ForwardRefExoticComponent<PaginationNextTriggerProps & RefAttributes<HTMLButtonElement>>;
