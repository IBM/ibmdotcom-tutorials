import { UsePresenceReturn } from './use-presence';
import { Provider } from 'react';
export interface UsePresenceContext extends UsePresenceReturn {
}
export declare const PresenceProvider: Provider<UsePresenceContext>, usePresenceContext: () => UsePresenceContext;
