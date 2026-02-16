import { type HTMLChakraProps } from "../../styled-system";
export interface AbsoluteCenterProps extends HTMLChakraProps<"div"> {
    axis?: "horizontal" | "vertical" | "both";
}
/**
 * React component used to horizontally and vertically center an element
 * relative to its parent dimensions.
 *
 * It uses the `position: absolute` strategy.
 *
 * @see Docs https://chakra-ui.com/center
 */
export declare const AbsoluteCenter: import("../..").ChakraComponent<"div", {
    axis?: import("../..").ConditionalValue<"both" | "horizontal" | "vertical" | undefined>;
}>;
