import type { RecipeProps } from "../../styled-system";
import { type GroupProps } from "../group";
export interface ButtonGroupProps extends GroupProps, RecipeProps<"button"> {
}
export declare const ButtonGroup: import("react").ForwardRefExoticComponent<ButtonGroupProps & import("react").RefAttributes<HTMLDivElement>>;
