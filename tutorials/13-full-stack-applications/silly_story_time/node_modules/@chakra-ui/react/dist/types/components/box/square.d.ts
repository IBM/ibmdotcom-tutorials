import { type BoxProps } from "./box";
export interface SquareProps extends BoxProps {
    /**
     * The size (width and height) of the square
     */
    size?: BoxProps["boxSize"];
}
export declare const Square: import("react").ForwardRefExoticComponent<SquareProps & import("react").RefAttributes<HTMLDivElement>>;
