import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
export interface RadiomarkProps extends HTMLChakraProps<"span", RecipeProps<"radiomark">>, UnstyledProp {
    /**
     * Whether the checkmark is checked
     */
    checked?: boolean;
    /**
     * Whether the checkmark is disabled
     */
    disabled?: boolean;
}
export declare const Radiomark: import("react").ForwardRefExoticComponent<RadiomarkProps & import("react").RefAttributes<HTMLSpanElement>>;
