import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface CheckmarkProps extends HTMLChakraProps<"svg", RecipeProps<"checkmark">>, UnstyledProp {
    /**
     * Whether the checkmark is checked
     */
    checked?: boolean;
    /**
     * Whether the checkmark is indeterminate
     */
    indeterminate?: boolean;
    /**
     * Whether the checkmark is disabled
     */
    disabled?: boolean;
}
export declare const Checkmark: import("react").ForwardRefExoticComponent<CheckmarkProps & import("react").RefAttributes<SVGSVGElement>>;
