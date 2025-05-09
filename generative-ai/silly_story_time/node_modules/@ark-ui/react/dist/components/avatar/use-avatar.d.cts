import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as avatar from '@zag-js/avatar';
export interface UseAvatarProps extends Optional<Omit<avatar.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseAvatarReturn extends avatar.Api<PropTypes> {
}
export declare const useAvatar: (props?: UseAvatarProps) => UseAvatarReturn;
