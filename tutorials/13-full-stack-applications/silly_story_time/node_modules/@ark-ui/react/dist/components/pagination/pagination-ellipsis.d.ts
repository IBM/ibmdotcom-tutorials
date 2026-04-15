import { EllipsisProps } from '@zag-js/pagination';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PaginationEllipsisBaseProps extends EllipsisProps, PolymorphicProps {
}
export interface PaginationEllipsisProps extends HTMLProps<'div'>, PaginationEllipsisBaseProps {
}
export declare const PaginationEllipsis: ForwardRefExoticComponent<PaginationEllipsisProps & RefAttributes<HTMLDivElement>>;
