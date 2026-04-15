export declare const listSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "item" | "indicator", {
    variant: {
        marker: {
            root: {
                listStyle: "revert";
            };
            item: {
                _marker: {
                    color: "fg.subtle";
                };
            };
        };
        plain: {
            item: {
                alignItems: "flex-start";
                display: "inline-flex";
            };
        };
    };
    align: {
        center: {
            item: {
                alignItems: "center";
            };
        };
        start: {
            item: {
                alignItems: "flex-start";
            };
        };
        end: {
            item: {
                alignItems: "flex-end";
            };
        };
    };
}>;
