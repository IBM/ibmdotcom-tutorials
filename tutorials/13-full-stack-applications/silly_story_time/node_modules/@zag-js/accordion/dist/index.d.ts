import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { EventObject, Machine, Service } from '@zag-js/core';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "item" | "itemTrigger" | "itemContent" | "itemIndicator">;

interface ValueChangeDetails {
    value: string[];
}
interface FocusChangeDetails {
    value: string | null;
}
type ElementIds = Partial<{
    root: string;
    item(value: string): string;
    itemContent(value: string): string;
    itemTrigger(value: string): string;
}>;
interface AccordionProps extends DirectionProperty, CommonProperties {
    /**
     * The ids of the elements in the accordion. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * Whether multiple accordion items can be expanded at the same time.
     * @default false
     */
    multiple?: boolean | undefined;
    /**
     * Whether an accordion item can be closed after it has been expanded.
     * @default false
     */
    collapsible?: boolean | undefined;
    /**
     * The controlled value of the expanded accordion items.
     */
    value?: string[] | undefined;
    /**
     * The initial value of the expanded accordion items.
     * Use when you don't need to control the value of the accordion.
     */
    defaultValue?: string[] | undefined;
    /**
     * Whether the accordion items are disabled
     */
    disabled?: boolean | undefined;
    /**
     * The callback fired when the state of expanded/collapsed accordion items changes.
     */
    onValueChange?: ((details: ValueChangeDetails) => void) | undefined;
    /**
     * The callback fired when the focused accordion item changes.
     */
    onFocusChange?: ((details: FocusChangeDetails) => void) | undefined;
    /**
     *  The orientation of the accordion items.
     *  @default "vertical"
     */
    orientation?: "horizontal" | "vertical" | undefined;
}
type PropsWithDefault = "multiple" | "collapsible" | "orientation";
type AccordionSchema = {
    state: "idle" | "focused";
    props: RequiredBy<AccordionProps, PropsWithDefault>;
    context: {
        value: string[];
        focusedValue: string | null;
    };
    computed: {
        isHorizontal: boolean;
    };
    action: string;
    guard: string;
    effect: string;
    event: EventObject;
};
type AccordionService = Service<AccordionSchema>;
type AccordionMachine = Machine<AccordionSchema>;
interface ItemProps {
    /**
     * The value of the accordion item.
     */
    value: string;
    /**
     * Whether the accordion item is disabled.
     */
    disabled?: boolean | undefined;
}
interface ItemState {
    /**
     * Whether the accordion item is expanded.
     */
    expanded: boolean;
    /**
     * Whether the accordion item is focused.
     */
    focused: boolean;
    /**
     * Whether the accordion item is disabled.
     */
    disabled: boolean;
}
interface AccordionApi<T extends PropTypes = PropTypes> {
    /**
     * The value of the focused accordion item.
     */
    focusedValue: string | null;
    /**
     * The value of the accordion
     */
    value: string[];
    /**
     * Sets the value of the accordion.
     */
    setValue: (value: string[]) => void;
    /**
     * Gets the state of an accordion item.
     */
    getItemState(props: ItemProps): ItemState;
    getRootProps(): T["element"];
    getItemProps(props: ItemProps): T["element"];
    getItemContentProps(props: ItemProps): T["element"];
    getItemTriggerProps(props: ItemProps): T["button"];
    getItemIndicatorProps(props: ItemProps): T["element"];
}

declare function connect<T extends PropTypes>(service: Service<AccordionSchema>, normalize: NormalizeProps<T>): AccordionApi<T>;

declare const machine: _zag_js_core.Machine<AccordionSchema>;

declare const props: (keyof AccordionProps)[];
declare const splitProps: <Props extends Partial<AccordionProps>>(props: Props) => [Partial<AccordionProps>, Omit<Props, keyof AccordionProps>];
declare const itemProps: (keyof ItemProps)[];
declare const splitItemProps: <Props extends ItemProps>(props: Props) => [ItemProps, Omit<Props, keyof ItemProps>];

export { type AccordionApi as Api, type ElementIds, type FocusChangeDetails, type ItemProps, type ItemState, type AccordionMachine as Machine, type AccordionProps as Props, type AccordionService as Service, type ValueChangeDetails, anatomy, connect, itemProps, machine, props, splitItemProps, splitProps };
