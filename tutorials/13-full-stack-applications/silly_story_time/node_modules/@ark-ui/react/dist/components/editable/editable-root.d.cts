import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseEditableProps } from './use-editable';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface EditableRootBaseProps extends UseEditableProps, PolymorphicProps {
}
export interface EditableRootProps extends Assign<HTMLProps<'div'>, EditableRootBaseProps> {
}
export declare const EditableRoot: ForwardRefExoticComponent<EditableRootProps & RefAttributes<HTMLDivElement>>;
