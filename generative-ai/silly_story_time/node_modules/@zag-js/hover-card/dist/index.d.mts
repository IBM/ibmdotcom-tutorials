import { InteractOutsideHandlers } from '@zag-js/dismissable';
export { FocusOutsideEvent, InteractOutsideEvent, PointerDownOutsideEvent } from '@zag-js/dismissable';
import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';
import { PositioningOptions, Placement } from '@zag-js/popper';
export { Placement, PositioningOptions } from '@zag-js/popper';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"content" | "arrow" | "arrowTip" | "trigger" | "positioner">;

interface OpenChangeDetails {
    open: boolean;
}
type ElementIds = Partial<{
    trigger: string;
    content: string;
    positioner: string;
    arrow: string;
}>;
interface HoverCardProps extends DirectionProperty, CommonProperties, InteractOutsideHandlers {
    /**
     * The ids of the elements in the popover. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * Function called when the hover card opens or closes.
     */
    onOpenChange?: ((details: OpenChangeDetails) => void) | undefined;
    /**
     * The duration from when the mouse enters the trigger until the hover card opens.
     * @default 700
     */
    openDelay?: number | undefined;
    /**
     * The duration from when the mouse leaves the trigger or content until the hover card closes.
     * @default 300
     */
    closeDelay?: number | undefined;
    /**
     * The controlled open state of the hover card
     */
    open?: boolean | undefined;
    /**
     * The initial open state of the hover card when rendered.
     * Use when you don't need to control the open state of the hover card.
     */
    defaultOpen?: boolean | undefined;
    /**
     * The user provided options used to position the popover content
     */
    positioning?: PositioningOptions | undefined;
}
type PropsWithDefault = "openDelay" | "closeDelay" | "positioning";
interface PrivateContext {
    /**
     * The computed placement of the tooltip.
     */
    currentPlacement: Placement | undefined;
    /**
     * Whether the hover card is open by pointer
     */
    isPointer: boolean;
    /**
     * Whether the hover card is open
     */
    open: boolean;
}
interface HoverCardSchema {
    props: RequiredBy<HoverCardProps, PropsWithDefault>;
    context: PrivateContext;
    state: "opening" | "open" | "closing" | "closed";
    tag: "open" | "closed";
    action: string;
    event: EventObject;
    guard: string;
    effect: string;
}
type HoverCardService = Service<HoverCardSchema>;
type HoverCardMachine = Machine<HoverCardSchema>;
interface HoverCardApi<T extends PropTypes = PropTypes> {
    /**
     * Whether the hover card is open
     */
    open: boolean;
    /**
     * Function to open the hover card
     */
    setOpen(open: boolean): void;
    /**
     * Function to reposition the popover
     */
    reposition(options?: Partial<PositioningOptions>): void;
    getArrowProps(): T["element"];
    getArrowTipProps(): T["element"];
    getTriggerProps(): T["element"];
    getPositionerProps(): T["element"];
    getContentProps(): T["element"];
}

declare function connect<T extends PropTypes>(service: HoverCardService, normalize: NormalizeProps<T>): HoverCardApi<T>;

declare const machine: _zag_js_core.Machine<HoverCardSchema>;

declare const props: (keyof HoverCardProps)[];
declare const splitProps: <Props extends Partial<HoverCardProps>>(props: Props) => [Partial<HoverCardProps>, Omit<Props, keyof HoverCardProps>];

export { type HoverCardApi as Api, type ElementIds, type HoverCardMachine as Machine, type OpenChangeDetails, type HoverCardProps as Props, type HoverCardService as Service, anatomy, connect, machine, props, splitProps };
