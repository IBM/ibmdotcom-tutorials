import { ReactNode } from 'react';
import { UseAvatarContext } from './use-avatar-context';
export interface AvatarContextProps {
    children: (context: UseAvatarContext) => ReactNode;
}
export declare const AvatarContext: (props: AvatarContextProps) => ReactNode;
