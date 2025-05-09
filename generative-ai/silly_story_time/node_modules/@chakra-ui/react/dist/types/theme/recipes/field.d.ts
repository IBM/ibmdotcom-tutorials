export declare const fieldSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "label" | "input" | "textarea" | "select" | "errorText" | "helperText" | "requiredIndicator", {
    orientation: {
        vertical: {
            root: {
                flexDirection: "column";
                alignItems: "flex-start";
            };
        };
        horizontal: {
            root: {
                flexDirection: "row";
                alignItems: "center";
                justifyContent: "space-between";
            };
            label: {
                flex: "0 0 var(--field-label-width, 80px)";
            };
        };
    };
}>;
