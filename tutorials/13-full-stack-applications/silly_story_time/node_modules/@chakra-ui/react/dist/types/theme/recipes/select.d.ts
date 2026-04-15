export declare const selectSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "item" | "itemIndicator" | "positioner" | "content" | "indicator" | "list" | "control" | "label" | "trigger" | "itemGroup" | "clearTrigger" | "itemGroupLabel" | "itemText" | "valueText" | "indicatorGroup", {
    variant: {
        outline: {
            trigger: {
                bg: "transparent";
                borderWidth: "1px";
                borderColor: "border";
                _expanded: {
                    borderColor: "border.emphasized";
                };
            };
        };
        subtle: {
            trigger: {
                borderWidth: "1px";
                borderColor: "transparent";
                bg: "bg.muted";
            };
        };
    };
    size: {
        xs: {
            root: {
                "--select-trigger-height": "sizes.8";
                "--select-trigger-padding-x": "spacing.2";
            };
            content: {
                p: "1";
                gap: "1";
                textStyle: "xs";
            };
            trigger: {
                textStyle: "xs";
                gap: "1";
            };
            item: {
                py: "1";
                px: "2";
            };
            itemGroupLabel: {
                py: "1";
                px: "2";
            };
            indicator: {
                _icon: {
                    width: "3.5";
                    height: "3.5";
                };
            };
        };
        sm: {
            root: {
                "--select-trigger-height": "sizes.9";
                "--select-trigger-padding-x": "spacing.2.5";
            };
            content: {
                p: "1";
                textStyle: "sm";
            };
            trigger: {
                textStyle: "sm";
                gap: "1";
            };
            indicator: {
                _icon: {
                    width: "4";
                    height: "4";
                };
            };
            item: {
                py: "1";
                px: "1.5";
            };
            itemGroup: {
                mt: "1";
            };
            itemGroupLabel: {
                py: "1";
                px: "1.5";
            };
        };
        md: {
            root: {
                "--select-trigger-height": "sizes.10";
                "--select-trigger-padding-x": "spacing.3";
            };
            content: {
                p: "1";
                textStyle: "sm";
            };
            itemGroup: {
                mt: "1.5";
            };
            item: {
                py: "1.5";
                px: "2";
            };
            itemIndicator: {
                display: "flex";
                alignItems: "center";
                justifyContent: "center";
            };
            itemGroupLabel: {
                py: "1.5";
                px: "2";
            };
            trigger: {
                textStyle: "sm";
                gap: "2";
            };
            indicator: {
                _icon: {
                    width: "4";
                    height: "4";
                };
            };
        };
        lg: {
            root: {
                "--select-trigger-height": "sizes.12";
                "--select-trigger-padding-x": "spacing.4";
            };
            content: {
                p: "1.5";
                textStyle: "md";
            };
            itemGroup: {
                mt: "2";
            };
            item: {
                py: "2";
                px: "3";
            };
            itemGroupLabel: {
                py: "2";
                px: "3";
            };
            trigger: {
                textStyle: "md";
                py: "3";
                gap: "2";
            };
            indicator: {
                _icon: {
                    width: "5";
                    height: "5";
                };
            };
        };
    };
}>;
