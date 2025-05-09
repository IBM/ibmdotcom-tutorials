import { ContentProps } from '@zag-js/tabs';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TabContentBaseProps extends ContentProps, PolymorphicProps {
}
export interface TabContentProps extends HTMLProps<'div'>, TabContentBaseProps {
}
export declare const TabContent: ForwardRefExoticComponent<TabContentProps & RefAttributes<HTMLDivElement>>;
