import type { Assign } from "@ark-ui/react";
import type { HTMLChakraProps, SystemStyleObject } from "../../styled-system";
export interface WrapProps extends Assign<HTMLChakraProps<"div">, {
    justify?: SystemStyleObject["justifyContent"];
    align?: SystemStyleObject["alignItems"];
    direction?: SystemStyleObject["flexDirection"];
}> {
}
export declare const Wrap: import("react").ForwardRefExoticComponent<WrapProps & import("react").RefAttributes<HTMLDivElement>>;
export interface WrapItemProps extends HTMLChakraProps<"div"> {
}
export declare const WrapItem: import("react").ForwardRefExoticComponent<WrapItemProps & import("react").RefAttributes<HTMLDivElement>>;
