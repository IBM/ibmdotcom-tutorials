import { UseMenuReturn } from './use-menu';
import { Provider } from 'react';
export type UseMenuMachineContext = UseMenuReturn['service'] | undefined;
export declare const MenuMachineProvider: Provider<UseMenuMachineContext>, useMenuMachineContext: () => UseMenuMachineContext;
