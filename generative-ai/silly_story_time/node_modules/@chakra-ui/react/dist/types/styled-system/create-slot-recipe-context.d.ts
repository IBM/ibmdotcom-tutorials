import type { SystemStyleObject } from "./css.types";
import type { JsxFactoryOptions } from "./factory.types";
import type { ConfigRecipeSlots } from "./generated/recipes.gen";
import { type SlotRecipeKey, type UseSlotRecipeOptions } from "./use-slot-recipe";
interface WrapElementProps<P> {
    wrapElement?(element: React.ReactElement, props: P): React.ReactElement;
}
export interface WithRootProviderOptions<P> extends WrapElementProps<P> {
    defaultProps?: Partial<P>;
}
export interface WithProviderOptions<P> extends JsxFactoryOptions<P>, WrapElementProps<P> {
}
export interface WithContextOptions<P> extends JsxFactoryOptions<P> {
}
export declare const createSlotRecipeContext: <R extends SlotRecipeKey>(options: UseSlotRecipeOptions<R>) => {
    StylesProvider: import("react").Provider<Record<string, SystemStyleObject>>;
    ClassNamesProvider: import("react").Provider<Record<string, string>>;
    PropsProvider: import("react").Provider<Record<string, any>>;
    usePropsContext: () => Record<string, any>;
    useRecipeResult: (props: any) => {
        styles: Record<string, SystemStyleObject>;
        classNames: Record<string, string>;
        props: {
            [x: string]: any;
            [x: number]: any;
            [x: symbol]: any;
        };
    };
    withProvider: <T, P>(Component: React.ElementType<any>, slot: R extends keyof ConfigRecipeSlots ? ConfigRecipeSlots[R] : string, options?: WithProviderOptions<P>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;
    withContext: <T, P_1>(Component: React.ElementType<any>, slot?: R extends keyof ConfigRecipeSlots ? ConfigRecipeSlots[R] : string, options?: WithContextOptions<P_1>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P_1> & React.RefAttributes<T>>;
    withRootProvider: <P_2>(Component: React.ElementType<any>, options?: WithRootProviderOptions<P_2>) => React.FC<React.PropsWithoutRef<P_2>>;
    useStyles: () => Record<string, SystemStyleObject>;
    useClassNames: () => Record<string, string>;
};
export {};
