import { UseCollapsibleProps } from './use-collapsible';
export declare const splitCollapsibleProps: <T extends UseCollapsibleProps>(props: T) => [UseCollapsibleProps, Omit<T, "open" | "ids" | "disabled" | "id" | "lazyMount" | "unmountOnExit" | "defaultOpen" | "onOpenChange" | "onExitComplete">];
