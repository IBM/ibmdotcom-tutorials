export declare const menuSlotRecipe: import("../..").SlotRecipeDefinition<"item" | "itemIndicator" | "positioner" | "content" | "separator" | "indicator" | "trigger" | "itemGroup" | "arrow" | "arrowTip" | "contextTrigger" | "itemGroupLabel" | "itemText" | "triggerItem" | "itemCommand", {
    variant: {
        subtle: {
            item: {
                _highlighted: {
                    bg: "bg.emphasized/60";
                };
            };
        };
        solid: {
            item: {
                _highlighted: {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                };
            };
        };
    };
    size: {
        sm: {
            content: {
                minW: "8rem";
                padding: "1";
            };
            item: {
                gap: "1";
                textStyle: "xs";
                py: "1";
                px: "1.5";
            };
        };
        md: {
            content: {
                minW: "8rem";
                padding: "1.5";
            };
            item: {
                gap: "2";
                textStyle: "sm";
                py: "1.5";
                px: "2";
            };
        };
    };
}>;
