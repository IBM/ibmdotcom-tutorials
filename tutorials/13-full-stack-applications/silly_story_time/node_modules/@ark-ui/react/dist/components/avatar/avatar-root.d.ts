import { HTMLProps, PolymorphicProps } from '../factory';
import { UseAvatarProps } from './use-avatar';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface AvatarRootBaseProps extends UseAvatarProps, PolymorphicProps {
}
export interface AvatarRootProps extends HTMLProps<'div'>, AvatarRootBaseProps {
}
export declare const AvatarRoot: ForwardRefExoticComponent<AvatarRootProps & RefAttributes<HTMLDivElement>>;
