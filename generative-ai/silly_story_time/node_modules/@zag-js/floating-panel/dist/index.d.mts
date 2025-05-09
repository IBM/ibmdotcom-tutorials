import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';
import { Size, Point } from '@zag-js/rect-utils';
export { Point, Rect, Size } from '@zag-js/rect-utils';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"trigger" | "positioner" | "content" | "header" | "body" | "title" | "resizeTrigger" | "dragTrigger" | "stageTrigger" | "closeTrigger" | "control">;

interface PositionChangeDetails {
    position: Point;
}
interface SizeChangeDetails {
    size: Size;
}
interface OpenChangeDetails {
    open: boolean;
}
type Stage = "minimized" | "maximized" | "default";
interface StageChangeDetails {
    stage: Stage;
}
interface AnchorPositionDetails {
    triggerRect: DOMRect | null;
    boundaryRect: DOMRect | null;
}
type ElementIds = Partial<{
    trigger: string;
    positioner: string;
    content: string;
    title: string;
    header: string;
}>;
interface IntlTranslations {
    minimize: string;
    maximize: string;
    restore: string;
}
interface FloatingPanelProps extends DirectionProperty, CommonProperties {
    /**
     * The ids of the elements in the floating panel. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * The translations for the floating panel.
     */
    translations?: IntlTranslations | undefined;
    /**
     * The strategy to use for positioning
     * @default "fixed"
     */
    strategy?: "absolute" | "fixed" | undefined;
    /**
     * Whether the panel should be strictly contained within the boundary when dragging
     * @default true
     */
    allowOverflow?: boolean | undefined;
    /**
     * The controlled open state of the panel
     */
    open?: boolean | undefined;
    /**
     * The initial open state of the panel when rendered.
     * Use when you don't need to control the open state of the panel.
     * @default false
     */
    defaultOpen?: boolean | undefined;
    /**
     * Whether the panel is draggable
     * @default true
     */
    draggable?: boolean | undefined;
    /**
     * Whether the panel is resizable
     * @default true
     */
    resizable?: boolean | undefined;
    /**
     * The size of the panel
     */
    size?: Size | undefined;
    /**
     * The default size of the panel
     */
    defaultSize?: Size | undefined;
    /**
     * The minimum size of the panel
     */
    minSize?: Size | undefined;
    /**
     * The maximum size of the panel
     */
    maxSize?: Size | undefined;
    /**
     * The controlled position of the panel
     */
    position?: Point | undefined;
    /**
     * The initial position of the panel when rendered.
     * Use when you don't need to control the position of the panel.
     */
    defaultPosition?: Point | undefined;
    /**
     * Function that returns the initial position of the panel when it is opened.
     * If provided, will be used instead of the default position.
     */
    getAnchorPosition?: ((details: AnchorPositionDetails) => Point) | undefined;
    /**
     * Whether the panel is locked to its aspect ratio
     */
    lockAspectRatio?: boolean | undefined;
    /**
     * Whether the panel should close when the escape key is pressed
     */
    closeOnEscape?: boolean | undefined;
    /**
     * The boundary of the panel. Useful for recalculating the boundary rect when
     * the it is resized.
     */
    getBoundaryEl?: (() => HTMLElement | null) | undefined;
    /**
     *  Whether the panel is disabled
     */
    disabled?: boolean | undefined;
    /**
     * Function called when the position of the panel changes via dragging
     */
    onPositionChange?: ((details: PositionChangeDetails) => void) | undefined;
    /**
     * Function called when the position of the panel changes via dragging ends
     */
    onPositionChangeEnd?: ((details: PositionChangeDetails) => void) | undefined;
    /**
     * Function called when the panel is opened or closed
     */
    onOpenChange?: ((details: OpenChangeDetails) => void) | undefined;
    /**
     * Function called when the size of the panel changes via resizing
     */
    onSizeChange?: ((details: SizeChangeDetails) => void) | undefined;
    /**
     * Function called when the size of the panel changes via resizing ends
     */
    onSizeChangeEnd?: ((details: SizeChangeDetails) => void) | undefined;
    /**
     * Whether the panel size and position should be preserved when it is closed
     */
    persistRect?: boolean | undefined;
    /**
     * The snap grid for the panel
     * @default 1
     */
    gridSize?: number | undefined;
    /**
     * Function called when the stage of the panel changes
     */
    onStageChange?: ((details: StageChangeDetails) => void) | undefined;
}
type PropWithDefault = "strategy" | "gridSize" | "defaultSize" | "defaultPosition" | "allowOverflow" | "draggable" | "resizable" | "id" | "translations";
interface PrivateContext {
    /**
     * The last position of the mouse event
     */
    lastEventPosition: Point | null;
    /**
     * The previous position of the panel before dragging
     */
    prevPosition: Point | null;
    /**
     * The previous size of the panel before resizing
     */
    prevSize: Size | null;
    /**
     * The stage of the panel
     */
    stage: Stage;
    /**
     * Whether the panel is topmost in the panel stack
     */
    isTopmost?: boolean | undefined;
    /**
     * The size of the panel
     */
    size: Size;
    /**
     * The position of the panel
     */
    position: Point;
}
type ComputedContext = Readonly<{
    isMaximized: boolean;
    isMinimized: boolean;
    isStaged: boolean;
    canResize: boolean;
    canDrag: boolean;
}>;
interface FloatingPanelSchema {
    props: RequiredBy<FloatingPanelProps, PropWithDefault> & {
        hasSpecifiedPosition: boolean;
    };
    context: PrivateContext;
    computed: ComputedContext;
    tag: "open" | "closed";
    state: "open" | "open.dragging" | "open.resizing" | "closed";
    event: EventObject;
    action: string;
    effect: string;
    guard: string;
}
type FloatingPanelService = Service<FloatingPanelSchema>;
type FloatingPanelMachine = Machine<FloatingPanelSchema>;
type ResizeTriggerAxis = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";
interface ResizeTriggerProps {
    /**
     * The axis of the resize handle
     */
    axis: ResizeTriggerAxis;
}
interface StageTriggerProps {
    /**
     * The stage of the panel
     */
    stage: Stage;
}
interface FloatingPanelApi<T extends PropTypes = PropTypes> {
    /**
     * Whether the panel is open
     */
    open: boolean;
    /**
     * Function to open or close the panel
     */
    setOpen(open: boolean): void;
    /**
     * Whether the panel is being dragged
     */
    dragging: boolean;
    /**
     * Whether the panel is being resized
     */
    resizing: boolean;
    /**
     * The position of the panel
     */
    position: Point;
    /**
     * Function to set the position of the panel
     */
    setPosition(position: Point): void;
    /**
     * The size of the panel
     */
    size: Size;
    /**
     * Function to set the size of the panel
     */
    setSize(size: Size): void;
    /**
     * Function to minimize the panel
     */
    minimize(): void;
    /**
     * Function to maximize the panel
     */
    maximize(): void;
    /**
     * Function to restore the panel before it was minimized or maximized
     */
    restore(): void;
    /**
     * Whether the panel is resizable
     */
    resizable: boolean;
    /**
     * Whether the panel is draggable
     */
    draggable: boolean;
    getDragTriggerProps(): T["element"];
    getResizeTriggerProps(props: ResizeTriggerProps): T["element"];
    getTriggerProps(): T["button"];
    getPositionerProps(): T["element"];
    getContentProps(): T["element"];
    getTitleProps(): T["element"];
    getHeaderProps(): T["element"];
    getBodyProps(): T["element"];
    getCloseTriggerProps(): T["button"];
    getControlProps(): T["element"];
    getStageTriggerProps(props: StageTriggerProps): T["button"];
}

declare function connect<T extends PropTypes>(service: FloatingPanelService, normalize: NormalizeProps<T>): FloatingPanelApi<T>;

declare const machine: _zag_js_core.Machine<FloatingPanelSchema>;

declare const props: (keyof FloatingPanelProps)[];
declare const splitProps: <Props extends Partial<FloatingPanelProps>>(props: Props) => [Partial<FloatingPanelProps>, Omit<Props, keyof FloatingPanelProps>];
declare const resizeTriggerProps: "axis"[];
declare const splitResizeTriggerProps: <Props extends Partial<ResizeTriggerProps>>(props: Props) => [Partial<ResizeTriggerProps>, Omit<Props, "axis">];

export { type AnchorPositionDetails, type FloatingPanelApi as Api, type ElementIds, type IntlTranslations, type FloatingPanelMachine as Machine, type OpenChangeDetails, type PositionChangeDetails, type FloatingPanelProps as Props, type ResizeTriggerAxis, type ResizeTriggerProps, type FloatingPanelService as Service, type SizeChangeDetails, type Stage, type StageChangeDetails, type StageTriggerProps, anatomy, connect, machine, props, resizeTriggerProps, splitProps, splitResizeTriggerProps };
