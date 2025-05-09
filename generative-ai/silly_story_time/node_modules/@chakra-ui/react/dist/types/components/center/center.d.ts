import { type HTMLChakraProps } from "../../styled-system";
export interface CenterProps extends HTMLChakraProps<"div"> {
}
/**
 * React component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://chakra-ui.com/center
 */
export declare const Center: import("../..").ChakraComponent<"div", {
    inline?: import("../..").ConditionalValue<boolean | undefined>;
}>;
