import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AvatarFallbackBaseProps extends PolymorphicProps {
}
export interface AvatarFallbackProps extends HTMLProps<'span'>, AvatarFallbackBaseProps {
}
export declare const AvatarFallback: ForwardRefExoticComponent<AvatarFallbackProps & RefAttributes<HTMLSpanElement>>;
