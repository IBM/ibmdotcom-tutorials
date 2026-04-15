import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TabIndicatorBaseProps extends PolymorphicProps {
}
export interface TabIndicatorProps extends HTMLProps<'div'>, TabIndicatorBaseProps {
}
export declare const TabIndicator: ForwardRefExoticComponent<TabIndicatorProps & RefAttributes<HTMLDivElement>>;
