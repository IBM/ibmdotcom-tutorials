import { UseAvatarReturn } from './use-avatar';
import { Provider } from 'react';
export interface UseAvatarContext extends UseAvatarReturn {
}
export declare const AvatarProvider: Provider<UseAvatarContext>, useAvatarContext: () => UseAvatarContext;
