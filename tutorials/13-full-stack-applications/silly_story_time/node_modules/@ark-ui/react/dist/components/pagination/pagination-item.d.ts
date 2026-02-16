import { ItemProps } from '@zag-js/pagination';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PaginationItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface PaginationItemProps extends Assign<HTMLProps<'button'>, PaginationItemBaseProps> {
}
export declare const PaginationItem: ForwardRefExoticComponent<PaginationItemProps & RefAttributes<HTMLButtonElement>>;
