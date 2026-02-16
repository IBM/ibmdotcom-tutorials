export declare const radioGroupSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "item" | "itemIndicator" | "indicator" | "label" | "itemText" | "itemControl" | "itemAddon", {
    variant: {
        outline: {
            itemControl: {
                borderWidth: "1px";
                borderColor: "inherit";
                _checked: {
                    color: "colorPalette.fg";
                    borderColor: "colorPalette.solid";
                };
                "& .dot": {
                    scale: "0.6";
                };
            } | undefined;
        };
        subtle: {
            itemControl: {
                borderWidth: "1px";
                bg: "colorPalette.muted";
                borderColor: "colorPalette.muted";
                color: "transparent";
                _checked: {
                    color: "colorPalette.fg";
                };
            } | undefined;
        };
        solid: {
            itemControl: {
                borderWidth: "1px";
                borderColor: "border";
                _checked: {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                    borderColor: "colorPalette.solid";
                };
            } | undefined;
        };
    };
    size: {
        xs: {
            item: {
                textStyle: "xs";
                gap: "1.5";
            };
            itemControl: {
                boxSize: "3";
            } | undefined;
        };
        sm: {
            item: {
                textStyle: "sm";
                gap: "2";
            };
            itemControl: {
                boxSize: "4";
            } | undefined;
        };
        md: {
            item: {
                textStyle: "sm";
                gap: "2.5";
            };
            itemControl: {
                boxSize: "5";
            } | undefined;
        };
        lg: {
            item: {
                textStyle: "md";
                gap: "3";
            };
            itemControl: {
                boxSize: "6";
            } | undefined;
        };
    };
}>;
