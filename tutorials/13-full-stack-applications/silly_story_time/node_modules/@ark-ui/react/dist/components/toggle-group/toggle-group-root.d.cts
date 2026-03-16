import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseToggleGroupProps } from './use-toggle-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToggleGroupRootBaseProps extends UseToggleGroupProps, PolymorphicProps {
}
export interface ToggleGroupRootProps extends Assign<HTMLProps<'div'>, ToggleGroupRootBaseProps> {
}
export declare const ToggleGroupRoot: ForwardRefExoticComponent<ToggleGroupRootProps & RefAttributes<HTMLDivElement>>;
