import { ItemProps } from '@zag-js/steps';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface StepsItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface StepsItemProps extends HTMLProps<'div'>, StepsItemBaseProps {
}
export declare const StepsItem: ForwardRefExoticComponent<StepsItemProps & RefAttributes<HTMLDivElement>>;
