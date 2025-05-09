import { Assign } from '../../types';
import { UseHighlightProps } from './use-highlight';
export interface HighlightBaseProps extends UseHighlightProps {
}
export interface HighlightProps extends Assign<React.ComponentProps<'mark'>, HighlightBaseProps> {
}
export declare const Highlight: (props: HighlightProps) => import("react/jsx-runtime").JSX.Element;
