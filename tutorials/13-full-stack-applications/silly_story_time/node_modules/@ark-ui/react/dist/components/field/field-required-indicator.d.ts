import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldRequiredIndicatorBaseProps extends PolymorphicProps {
    fallback?: React.ReactNode;
}
export interface FieldRequiredIndicatorProps extends HTMLProps<'span'>, FieldRequiredIndicatorBaseProps {
}
export declare const FieldRequiredIndicator: ForwardRefExoticComponent<FieldRequiredIndicatorProps & RefAttributes<HTMLSpanElement>>;
