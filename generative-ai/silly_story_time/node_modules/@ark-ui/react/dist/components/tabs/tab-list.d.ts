import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TabListBaseProps extends PolymorphicProps {
}
export interface TabListProps extends HTMLProps<'div'>, TabListBaseProps {
}
export declare const TabList: ForwardRefExoticComponent<TabListProps & RefAttributes<HTMLDivElement>>;
