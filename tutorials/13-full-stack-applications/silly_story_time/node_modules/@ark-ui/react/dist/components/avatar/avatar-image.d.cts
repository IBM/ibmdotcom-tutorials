import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AvatarImageBaseProps extends PolymorphicProps {
}
export interface AvatarImageProps extends HTMLProps<'img'>, AvatarImageBaseProps {
}
export declare const AvatarImage: ForwardRefExoticComponent<AvatarImageProps & RefAttributes<HTMLImageElement>>;
