import { type ConditionalValue, type HTMLChakraProps } from "../../styled-system";
export interface AspectRatioProps extends Omit<HTMLChakraProps<"div">, "aspectRatio"> {
    /**
     * The aspect ratio of the Box. Common values are:
     *
     * `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`
     */
    ratio?: ConditionalValue<number>;
}
export declare const AspectRatio: import("react").ForwardRefExoticComponent<AspectRatioProps & import("react").RefAttributes<HTMLDivElement>>;
