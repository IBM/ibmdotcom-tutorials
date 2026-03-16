import { UseTabsReturn } from './use-tabs';
import { Provider } from 'react';
export interface UseTabsContext extends UseTabsReturn {
}
export declare const TabsProvider: Provider<UseTabsContext>, useTabsContext: () => UseTabsContext;
