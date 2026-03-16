import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, Orientation, PropTypes, NormalizeProps } from '@zag-js/types';
export { Orientation } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "item">;

interface ValueChangeDetails {
    value: string[];
}
type ElementIds = Partial<{
    root: string;
    item(value: string): string;
}>;
interface ToggleGroupProps extends DirectionProperty, CommonProperties {
    /**
     * The ids of the elements in the toggle. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * Whether the toggle is disabled.
     */
    disabled?: boolean | undefined;
    /**
     * The controlled selected value of the toggle group.
     */
    value?: string[] | undefined;
    /**
     * The initial selected value of the toggle group when rendered.
     * Use when you don't need to control the selected value of the toggle group.
     */
    defaultValue?: string[] | undefined;
    /**
     * Function to call when the toggle is clicked.
     */
    onValueChange?: ((details: ValueChangeDetails) => void) | undefined;
    /**
     * Whether to loop focus inside the toggle group.
     * @default true
     */
    loopFocus?: boolean | undefined;
    /**
     * Whether to use roving tab index to manage focus.
     * @default true
     */
    rovingFocus?: boolean | undefined;
    /**
     * The orientation of the toggle group.
     * @default "horizontal"
     */
    orientation?: Orientation | undefined;
    /**
     * Whether to allow multiple toggles to be selected.
     */
    multiple?: boolean | undefined;
    /**
     * Whether the toggle group allows empty selection.
     * **Note:** This is ignored if `multiple` is `true`.
     *
     * @default true
     */
    deselectable?: boolean | undefined;
}
type PropsWithDefault = "loopFocus" | "rovingFocus" | "orientation";
type ComputedContext = Readonly<{
    currentLoopFocus: boolean;
}>;
interface PrivateContext {
    /**
     * Whether the user is tabbing backward.
     */
    isTabbingBackward: boolean;
    /**
     * Whether the toggle was focused by a click.
     */
    isClickFocus: boolean;
    /**
     * The value of the toggle that was focused.
     */
    focusedId: string | null;
    /**
     * Whether the toggle group is within a toolbar.
     * This is used to determine whether to use roving tab index.
     */
    isWithinToolbar: boolean;
    /**
     * The value of the toggle group.
     */
    value: string[];
}
interface ToggleGroupSchema {
    props: RequiredBy<ToggleGroupProps, PropsWithDefault>;
    context: PrivateContext;
    computed: ComputedContext;
    state: "idle" | "focused";
    event: EventObject;
    action: string;
    effect: string;
    guard: string;
}
type ToggleGroupService = Service<ToggleGroupSchema>;
type ToggleGroupMachine = Machine<ToggleGroupSchema>;
interface ItemProps {
    value: string;
    disabled?: boolean | undefined;
}
interface ItemState {
    /**
     * The underlying id of the item.
     */
    id: string;
    /**
     * Whether the toggle item is disabled.
     */
    disabled: boolean;
    /**
     * Whether the toggle item is pressed.
     */
    pressed: boolean;
    /**
     * Whether the toggle item is focused.
     */
    focused: boolean;
}
interface ToggleGroupApi<T extends PropTypes = PropTypes> {
    /**
     * The value of the toggle group.
     */
    value: string[];
    /**
     * Function to set the value of the toggle group.
     */
    setValue: (values: string[]) => void;
    /**
     * Returns the state of the toggle item.
     */
    getItemState(props: ItemProps): ItemState;
    getRootProps(): T["element"];
    getItemProps(props: ItemProps): T["button"];
}

declare function connect<T extends PropTypes>(service: ToggleGroupService, normalize: NormalizeProps<T>): ToggleGroupApi<T>;

declare const machine: _zag_js_core.Machine<ToggleGroupSchema>;

declare const props: (keyof ToggleGroupProps)[];
declare const splitProps: <Props extends Partial<ToggleGroupProps>>(props: Props) => [Partial<ToggleGroupProps>, Omit<Props, keyof ToggleGroupProps>];
declare const itemProps: (keyof ItemProps)[];
declare const splitItemProps: <Props extends ItemProps>(props: Props) => [ItemProps, Omit<Props, keyof ItemProps>];

export { type ToggleGroupApi as Api, type ElementIds, type ItemProps, type ItemState, type ToggleGroupMachine as Machine, type ToggleGroupProps as Props, type ToggleGroupService as Service, type ValueChangeDetails, anatomy, connect, itemProps, machine, props, splitItemProps, splitProps };
