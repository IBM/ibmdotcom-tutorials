export declare const timelineSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "item" | "content" | "separator" | "title" | "description" | "indicator" | "connector", {
    variant: {
        subtle: {
            indicator: {
                bg: "colorPalette.muted";
            };
        };
        solid: {
            indicator: {
                bg: "colorPalette.solid";
                color: "colorPalette.contrast";
            };
        };
        outline: {
            indicator: {
                bg: "currentBg";
                borderWidth: "1px";
                borderColor: "colorPalette.muted";
            };
        };
        plain: {};
    };
    size: {
        sm: {
            root: {
                "--timeline-indicator-size": "sizes.4";
                "--timeline-font-size": "fontSizes.2xs";
            };
            title: {
                textStyle: "xs";
            };
        };
        md: {
            root: {
                "--timeline-indicator-size": "sizes.5";
                "--timeline-font-size": "fontSizes.xs";
            };
            title: {
                textStyle: "sm";
            };
        };
        lg: {
            root: {
                "--timeline-indicator-size": "sizes.6";
                "--timeline-font-size": "fontSizes.xs";
            };
            title: {
                mt: "0.5";
                textStyle: "sm";
            };
        };
        xl: {
            root: {
                "--timeline-indicator-size": "sizes.8";
                "--timeline-font-size": "fontSizes.sm";
            };
            title: {
                mt: "1.5";
                textStyle: "sm";
            };
        };
    };
}>;
