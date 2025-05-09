export declare const accordionSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "item" | "itemTrigger" | "itemContent" | "itemIndicator" | "itemBody", {
    variant: {
        outline: {
            item: {
                borderBottomWidth: "1px";
            };
        };
        subtle: {
            itemTrigger: {
                px: "var(--accordion-padding-x)";
            };
            itemContent: {
                px: "var(--accordion-padding-x)";
            };
            item: {
                borderRadius: "var(--accordion-radius)";
                _open: {
                    bg: "colorPalette.subtle";
                };
            };
        };
        enclosed: {
            root: {
                borderWidth: "1px";
                borderRadius: "var(--accordion-radius)";
                divideY: string;
                overflow: "hidden";
            };
            itemTrigger: {
                px: "var(--accordion-padding-x)";
            };
            itemContent: {
                px: "var(--accordion-padding-x)";
            };
            item: {
                _open: {
                    bg: "bg.subtle";
                };
            };
        };
        plain: {};
    };
    size: {
        sm: {
            root: {
                "--accordion-padding-x": "spacing.3";
                "--accordion-padding-y": "spacing.2";
            };
            itemTrigger: {
                textStyle: "sm";
                py: "var(--accordion-padding-y)";
            };
        };
        md: {
            root: {
                "--accordion-padding-x": "spacing.4";
                "--accordion-padding-y": "spacing.2";
            };
            itemTrigger: {
                textStyle: "md";
                py: "var(--accordion-padding-y)";
            };
        };
        lg: {
            root: {
                "--accordion-padding-x": "spacing.4.5";
                "--accordion-padding-y": "spacing.2.5";
            };
            itemTrigger: {
                textStyle: "lg";
                py: "var(--accordion-padding-y)";
            };
        };
    };
}>;
