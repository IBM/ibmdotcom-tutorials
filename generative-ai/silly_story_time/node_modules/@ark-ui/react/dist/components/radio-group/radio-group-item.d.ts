import { ItemProps } from '@zag-js/radio-group';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RadioGroupItemBaseProps extends ItemProps, PolymorphicProps {
}
export interface RadioGroupItemProps extends HTMLProps<'label'>, RadioGroupItemBaseProps {
}
export declare const RadioGroupItem: ForwardRefExoticComponent<RadioGroupItemProps & RefAttributes<HTMLLabelElement>>;
