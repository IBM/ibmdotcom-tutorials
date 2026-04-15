import { Assign } from '../../types';
import { RenderStrategyProps } from '../../utils/render-strategy';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseTabsProps } from './use-tabs';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TabsRootBaseProps extends UseTabsProps, RenderStrategyProps, PolymorphicProps {
}
export interface TabsRootProps extends Assign<HTMLProps<'div'>, TabsRootBaseProps> {
}
export declare const TabsRoot: ForwardRefExoticComponent<TabsRootProps & RefAttributes<HTMLDivElement>>;
