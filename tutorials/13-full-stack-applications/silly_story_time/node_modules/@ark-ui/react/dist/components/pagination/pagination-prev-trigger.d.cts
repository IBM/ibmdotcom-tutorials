import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PaginationPrevTriggerBaseProps extends PolymorphicProps {
}
export interface PaginationPrevTriggerProps extends HTMLProps<'button'>, PaginationPrevTriggerBaseProps {
}
export declare const PaginationPrevTrigger: ForwardRefExoticComponent<PaginationPrevTriggerProps & RefAttributes<HTMLButtonElement>>;
