import { type HTMLChakraProps, type SystemStyleObject } from "../../styled-system";
export interface BleedProps extends HTMLChakraProps<"div"> {
    /**
     * The negative margin on the x-axis
     */
    inline?: SystemStyleObject["marginInline"];
    /**
     * The negative margin on the y-axis
     */
    block?: SystemStyleObject["marginBlock"];
    /**
     * The negative margin on the inline-start axis
     */
    inlineStart?: SystemStyleObject["marginInlineStart"];
    /**
     * The negative margin on the inline-end axis
     */
    inlineEnd?: SystemStyleObject["marginInlineEnd"];
    /**
     * The negative margin on the block-start axis
     */
    blockStart?: SystemStyleObject["marginBlockStart"];
    /**
     * The negative margin on the block-end axis
     */
    blockEnd?: SystemStyleObject["marginBlockEnd"];
}
export declare const Bleed: import("react").ForwardRefExoticComponent<BleedProps & import("react").RefAttributes<HTMLDivElement>>;
