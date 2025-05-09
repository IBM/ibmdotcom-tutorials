import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RatingGroupLabelBaseProps extends PolymorphicProps {
}
export interface RatingGroupLabelProps extends HTMLProps<'label'>, RatingGroupLabelBaseProps {
}
export declare const RatingGroupLabel: ForwardRefExoticComponent<RatingGroupLabelProps & RefAttributes<HTMLLabelElement>>;
