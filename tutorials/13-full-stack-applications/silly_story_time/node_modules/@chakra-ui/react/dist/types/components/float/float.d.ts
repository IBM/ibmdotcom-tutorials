import { type ConditionalValue, type HTMLChakraProps, type SystemStyleObject } from "../../styled-system";
export interface FloatOptions {
    /**
     * The x offset of the indicator
     */
    offsetX?: SystemStyleObject["left"];
    /**
     * The y offset of the indicator
     */
    offsetY?: SystemStyleObject["top"];
    /**
     * The x and y offset of the indicator
     */
    offset?: SystemStyleObject["top"];
    /**
     * The placement of the indicator
     * @default "top-end"
     */
    placement?: ConditionalValue<"bottom-end" | "bottom-start" | "top-end" | "top-start" | "bottom-center" | "top-center" | "middle-center" | "middle-end" | "middle-start">;
}
export interface FloatProps extends Omit<HTMLChakraProps<"div">, keyof FloatOptions>, FloatOptions {
}
export declare const Float: import("react").ForwardRefExoticComponent<FloatProps & import("react").RefAttributes<HTMLDivElement>>;
