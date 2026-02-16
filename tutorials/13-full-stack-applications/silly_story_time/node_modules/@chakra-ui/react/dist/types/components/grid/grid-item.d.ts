import { type ConditionalValue, type SystemStyleObject } from "../../styled-system";
import type { BoxProps } from "../box/box";
export interface GridItemProps extends BoxProps {
    area?: SystemStyleObject["gridArea"];
    colSpan?: ConditionalValue<number | "auto">;
    colStart?: ConditionalValue<number | "auto">;
    colEnd?: ConditionalValue<number | "auto">;
    rowStart?: ConditionalValue<number | "auto">;
    rowEnd?: ConditionalValue<number | "auto">;
    rowSpan?: ConditionalValue<number | "auto">;
}
export declare const GridItem: import("react").ForwardRefExoticComponent<GridItemProps & import("react").RefAttributes<HTMLDivElement>>;
