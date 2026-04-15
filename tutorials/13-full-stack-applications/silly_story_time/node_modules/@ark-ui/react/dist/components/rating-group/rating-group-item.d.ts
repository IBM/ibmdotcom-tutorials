import { ItemProps } from '@zag-js/rating-group';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RatingGroupItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface RatingGroupItemProps extends HTMLProps<'span'>, RatingGroupItemBaseProps {
}
export declare const RatingGroupItem: ForwardRefExoticComponent<RatingGroupItemProps & RefAttributes<HTMLSpanElement>>;
