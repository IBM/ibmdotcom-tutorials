import { RenderStrategyProps } from '../../utils/render-strategy';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseTabsReturn } from './use-tabs';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseTabsReturn;
}
export interface TabsRootProviderBaseProps extends RootProviderProps, RenderStrategyProps, PolymorphicProps {
}
export interface TabsRootProviderProps extends HTMLProps<'div'>, TabsRootProviderBaseProps {
}
export declare const TabsRootProvider: ForwardRefExoticComponent<TabsRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
