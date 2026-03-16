export declare const cardSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "title" | "description" | "header" | "body" | "footer", {
    size: {
        sm: {
            root: {
                "--card-padding": "spacing.4";
            };
            title: {
                textStyle: "md";
            };
        };
        md: {
            root: {
                "--card-padding": "spacing.6";
            };
            title: {
                textStyle: "lg";
            };
        };
        lg: {
            root: {
                "--card-padding": "spacing.7";
            };
            title: {
                textStyle: "xl";
            };
        };
    };
    variant: {
        elevated: {
            root: {
                bg: "bg.panel";
                boxShadow: "md";
            };
        };
        outline: {
            root: {
                bg: "bg.panel";
                borderWidth: "1px";
                borderColor: "border";
            };
        };
        subtle: {
            root: {
                bg: "bg.muted";
            };
        };
    };
}>;
