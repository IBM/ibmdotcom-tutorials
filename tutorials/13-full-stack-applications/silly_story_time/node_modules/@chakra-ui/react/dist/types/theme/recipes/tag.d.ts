export declare const tagSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "closeTrigger" | "label" | "startElement" | "endElement", {
    size: {
        sm: {
            root: {
                px: "1.5";
                minH: "4.5";
                gap: "1";
                "--tag-avatar-size": "spacing.3";
                "--tag-element-size": "spacing.3";
                "--tag-element-offset": "-2px";
            };
            label: {
                textStyle: "xs";
            };
        };
        md: {
            root: {
                px: "1.5";
                minH: "5";
                gap: "1";
                "--tag-avatar-size": "spacing.3.5";
                "--tag-element-size": "spacing.3.5";
                "--tag-element-offset": "-2px";
            };
            label: {
                textStyle: "xs";
            };
        };
        lg: {
            root: {
                px: "2";
                minH: "6";
                gap: "1.5";
                "--tag-avatar-size": "spacing.4.5";
                "--tag-element-size": "spacing.4";
                "--tag-element-offset": "-3px";
            };
            label: {
                textStyle: "sm";
            };
        };
        xl: {
            root: {
                px: "2.5";
                minH: "8";
                gap: "1.5";
                "--tag-avatar-size": "spacing.6";
                "--tag-element-size": "spacing.4.5";
                "--tag-element-offset": "-4px";
            };
            label: {
                textStyle: "sm";
            };
        };
    };
    variant: {
        subtle: {
            root: {
                bg: "colorPalette.subtle";
                color: "colorPalette.fg";
            } | undefined;
        };
        solid: {
            root: {
                bg: "colorPalette.solid";
                color: "colorPalette.contrast";
            } | undefined;
        };
        outline: {
            root: {
                color: "colorPalette.fg";
                shadow: "inset 0 0 0px 1px var(--shadow-color)";
                shadowColor: "colorPalette.muted";
            } | undefined;
        };
        surface: {
            root: {
                bg: "colorPalette.subtle";
                color: "colorPalette.fg";
                shadow: "inset 0 0 0px 1px var(--shadow-color)";
                shadowColor: "colorPalette.muted";
            } | undefined;
        };
    };
}>;
