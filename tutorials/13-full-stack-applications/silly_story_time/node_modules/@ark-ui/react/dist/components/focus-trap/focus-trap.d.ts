import { FocusTrapOptions } from '@zag-js/focus-trap';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TrapOptions extends Pick<FocusTrapOptions, 'onActivate' | 'onDeactivate' | 'initialFocus' | 'fallbackFocus' | 'returnFocusOnDeactivate' | 'setReturnFocus'> {
    /**
     * Whether the focus trap is disabled.
     */
    disabled?: boolean;
}
export interface FocusTrapBaseProps extends PolymorphicProps, TrapOptions {
}
export interface FocusTrapProps extends Assign<HTMLProps<'div'>, FocusTrapBaseProps> {
}
export declare const FocusTrap: ForwardRefExoticComponent<FocusTrapProps & RefAttributes<HTMLDivElement>>;
