import { type ConditionalValue } from "../../styled-system";
import { type GridProps } from "./grid";
interface SimpleGridOptions {
    /**
     * The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.
     */
    minChildWidth?: GridProps["minWidth"];
    /**
     * The number of columns
     */
    columns?: ConditionalValue<number>;
}
export interface SimpleGridProps extends Omit<GridProps, "columns">, SimpleGridOptions {
}
/**
 * SimpleGrid
 *
 * React component that uses the `Grid` component and provides
 * a simpler interface to create responsive grid layouts.
 *
 * Provides props that easily define columns and spacing.
 *
 * @see Docs https://chakra-ui.com/simplegrid
 */
export declare const SimpleGrid: import("react").ForwardRefExoticComponent<SimpleGridProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
