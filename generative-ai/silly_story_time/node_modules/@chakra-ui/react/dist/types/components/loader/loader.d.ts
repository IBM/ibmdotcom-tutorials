import * as React from "react";
import type { HTMLChakraProps } from "../../styled-system";
export interface LoaderProps extends HTMLChakraProps<"span"> {
    /**
     * Whether the loader is visible
     * @default true
     */
    visible?: boolean;
    /**
     * The spinner to display when loading
     */
    spinner?: React.ReactNode;
    /**
     * The placement of the spinner
     * @default "start"
     */
    spinnerPlacement?: "start" | "end";
    /**
     * The text to display when loading
     */
    text?: React.ReactNode;
}
export declare const Loader: React.ForwardRefExoticComponent<LoaderProps & React.RefAttributes<HTMLSpanElement>>;
