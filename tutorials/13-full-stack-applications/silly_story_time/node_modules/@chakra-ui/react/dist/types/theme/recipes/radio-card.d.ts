export declare const radioCardSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "item" | "itemContent" | "itemIndicator" | "indicator" | "label" | "itemText" | "itemControl" | "itemAddon" | "itemDescription", {
    size: {
        sm: {
            item: {
                textStyle: "sm";
            };
            itemControl: {
                padding: "3";
                gap: "1.5";
            };
            itemAddon: {
                px: "3";
                py: "1.5";
                borderTopWidth: "1px";
            };
            itemIndicator: {
                boxSize: "4";
            } | undefined;
        };
        md: {
            item: {
                textStyle: "sm";
            };
            itemControl: {
                padding: "4";
                gap: "2.5";
            };
            itemAddon: {
                px: "4";
                py: "2";
                borderTopWidth: "1px";
            };
            itemIndicator: {
                boxSize: "5";
            } | undefined;
        };
        lg: {
            item: {
                textStyle: "md";
            };
            itemControl: {
                padding: "4";
                gap: "3.5";
            };
            itemAddon: {
                px: "4";
                py: "2";
                borderTopWidth: "1px";
            };
            itemIndicator: {
                boxSize: "6";
            } | undefined;
        };
    };
    variant: {
        surface: {
            item: {
                borderWidth: "1px";
                _checked: {
                    bg: "colorPalette.subtle";
                    color: "colorPalette.fg";
                    borderColor: "colorPalette.muted";
                };
            };
            itemIndicator: {
                borderWidth: "1px";
                borderColor: "border";
                _checked: {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                    borderColor: "colorPalette.solid";
                };
            } | undefined;
        };
        subtle: {
            item: {
                bg: "bg.muted";
            };
            itemControl: {
                _checked: {
                    bg: "colorPalette.muted";
                    color: "colorPalette.fg";
                };
            };
            itemIndicator: {
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
        outline: {
            item: {
                borderWidth: "1px";
                _checked: {
                    boxShadow: "0 0 0 1px var(--shadow-color)";
                    boxShadowColor: "colorPalette.solid";
                    borderColor: "colorPalette.solid";
                };
            };
            itemIndicator: {
                borderWidth: "1px";
                borderColor: "border";
                _checked: {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                    borderColor: "colorPalette.solid";
                };
            } | undefined;
        };
        solid: {
            item: {
                borderWidth: "1px";
                _checked: {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                    borderColor: "colorPalette.solid";
                };
            };
            itemIndicator: {
                bg: "bg";
                borderWidth: "1px";
                borderColor: "inherit";
                _checked: {
                    color: "colorPalette.solid";
                    borderColor: "currentcolor";
                };
            } | undefined;
        };
    };
    justify: {
        start: {
            item: {
                "--radio-card-justify": "flex-start";
            };
        };
        end: {
            item: {
                "--radio-card-justify": "flex-end";
            };
        };
        center: {
            item: {
                "--radio-card-justify": "center";
            };
        };
    };
    align: {
        start: {
            item: {
                "--radio-card-align": "flex-start";
            };
            itemControl: {
                textAlign: "start";
            };
        };
        end: {
            item: {
                "--radio-card-align": "flex-end";
            };
            itemControl: {
                textAlign: "end";
            };
        };
        center: {
            item: {
                "--radio-card-align": "center";
            };
            itemControl: {
                textAlign: "center";
            };
        };
    };
    orientation: {
        vertical: {
            itemControl: {
                flexDirection: "column";
            };
        };
        horizontal: {
            itemControl: {
                flexDirection: "row";
            };
        };
    };
}>;
