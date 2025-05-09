import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePinInputProps } from './use-pin-input';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PinInputRootBaseProps extends UsePinInputProps, PolymorphicProps {
}
export interface PinInputRootProps extends Assign<HTMLProps<'div'>, PinInputRootBaseProps> {
}
export declare const PinInputRoot: ForwardRefExoticComponent<PinInputRootProps & RefAttributes<HTMLDivElement>>;
