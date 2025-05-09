import { HTMLArkProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToggleIndicatorBaseProps {
    /**
     * The fallback content to render when the toggle is not pressed.
     */
    fallback?: React.ReactNode;
}
export interface ToggleIndicatorProps extends HTMLArkProps<'div'>, ToggleIndicatorBaseProps {
}
export declare const ToggleIndicator: ForwardRefExoticComponent<ToggleIndicatorProps & RefAttributes<HTMLDivElement>>;
