import { type HTMLChakraProps, type SystemStyleObject } from "../../styled-system";
export interface FlexOptions {
    align?: SystemStyleObject["alignItems"];
    justify?: SystemStyleObject["justifyContent"];
    wrap?: SystemStyleObject["flexWrap"];
    direction?: SystemStyleObject["flexDirection"];
    basis?: SystemStyleObject["flexBasis"];
    grow?: SystemStyleObject["flexGrow"];
    shrink?: SystemStyleObject["flexShrink"];
    inline?: boolean;
}
export interface FlexProps extends HTMLChakraProps<"div", FlexOptions> {
}
export declare const Flex: import("react").ForwardRefExoticComponent<FlexProps & import("react").RefAttributes<HTMLDivElement>>;
