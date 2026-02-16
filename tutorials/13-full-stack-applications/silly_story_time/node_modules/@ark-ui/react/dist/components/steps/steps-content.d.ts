import { ItemProps } from '@zag-js/steps';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsContentBaseProps extends PolymorphicProps, ItemProps {
}
export interface StepsContentProps extends HTMLProps<'div'>, StepsContentBaseProps {
}
export declare const StepsContent: ForwardRefExoticComponent<StepsContentProps & RefAttributes<HTMLDivElement>>;
