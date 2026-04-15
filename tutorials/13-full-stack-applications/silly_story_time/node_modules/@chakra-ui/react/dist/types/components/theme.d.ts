import { type HTMLChakraProps } from "../styled-system";
export interface ThemeProps extends HTMLChakraProps<"div"> {
    /**
     * The appearance of the theme.
     */
    appearance?: "light" | "dark";
    /**
     * Whether to apply the theme background and color.
     */
    hasBackground?: boolean;
}
export declare const Theme: import("react").ForwardRefExoticComponent<ThemeProps & import("react").RefAttributes<HTMLDivElement>>;
