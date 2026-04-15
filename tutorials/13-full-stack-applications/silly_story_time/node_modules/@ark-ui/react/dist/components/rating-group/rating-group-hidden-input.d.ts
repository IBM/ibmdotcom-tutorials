import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RatingGroupHiddenInputBaseProps extends PolymorphicProps {
}
export interface RatingGroupHiddenInputProps extends HTMLProps<'input'>, RatingGroupHiddenInputBaseProps {
}
export declare const RatingGroupHiddenInput: ForwardRefExoticComponent<RatingGroupHiddenInputProps & RefAttributes<HTMLInputElement>>;
