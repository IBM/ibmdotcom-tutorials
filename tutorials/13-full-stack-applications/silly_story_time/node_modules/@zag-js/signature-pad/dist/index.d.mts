import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';
import { StrokeOptions } from 'perfect-freehand';
export { StrokeOptions } from 'perfect-freehand';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "control" | "segment" | "segmentPath" | "guide" | "clearTrigger" | "label">;

interface Point {
    x: number;
    y: number;
    pressure: number;
}
interface DrawDetails {
    paths: string[];
}
interface DrawingOptions extends StrokeOptions {
    /**
     * The color of the stroke.
     * Note: Must be a valid CSS color string, not a css variable.
     */
    fill?: string | undefined;
}
type DataUrlType = "image/png" | "image/jpeg" | "image/svg+xml";
interface DrawEndDetails {
    paths: string[];
    getDataUrl(type: DataUrlType, quality?: number): Promise<string>;
}
type ElementIds = Partial<{
    root: string;
    control: string;
    hiddenInput: string;
    label: string;
}>;
interface IntlTranslations {
    clearTrigger: string;
    control: string;
}

interface SignaturePadProps extends DirectionProperty, CommonProperties {
    /**
     * The ids of the signature pad elements. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * The translations of the signature pad. Useful for internationalization.
     */
    translations?: IntlTranslations | undefined;
    /**
     * Callback when the signature pad is drawing.
     */
    onDraw?: ((details: DrawDetails) => void) | undefined;
    /**
     * Callback when the signature pad is done drawing.
     */
    onDrawEnd?: ((details: DrawEndDetails) => void) | undefined;
    /**
     * The drawing options.
     * @default '{ size: 2, simulatePressure: true }'
     */
    drawing?: DrawingOptions | undefined;
    /**
     * Whether the signature pad is disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Whether the signature pad is required.
     */
    required?: boolean | undefined;
    /**
     * Whether the signature pad is read-only.
     */
    readOnly?: boolean | undefined;
    /**
     * The name of the signature pad. Useful for form submission.
     */
    name?: string | undefined;
}
type PropsWithDefault = "drawing" | "translations";
interface PrivateContext {
    /**
     * The layers of the signature pad. A layer is a snapshot of a single stroke interaction.
     */
    paths: string[];
    /**
     * The current layer points.
     */
    currentPoints: Point[];
    /**
     * The current stroke path
     */
    currentPath: string | null;
}
type ComputedContext = Readonly<{
    isInteractive: boolean;
    isEmpty: boolean;
}>;
interface SignaturePadSchema {
    state: "idle" | "drawing";
    props: RequiredBy<SignaturePadProps, PropsWithDefault>;
    context: PrivateContext;
    computed: ComputedContext;
    action: string;
    event: EventObject;
    effect: string;
    guard: string;
}
type SignaturePadService = Service<SignaturePadSchema>;
type SignaturePadMachine = Machine<SignaturePadSchema>;
interface SegmentPathProps {
    path: string;
}
interface HiddenInputProps {
    value: string;
}
interface SignaturePadApi<T extends PropTypes = PropTypes> {
    /**
     * Whether the signature pad is empty.
     */
    empty: boolean;
    /**
     * Whether the user is currently drawing.
     */
    drawing: boolean;
    /**
     * The current path being drawn.
     */
    currentPath: string | null;
    /**
     * The paths of the signature pad.
     */
    paths: string[];
    /**
     * Returns the data URL of the signature pad.
     */
    getDataUrl(type: DataUrlType, quality?: number): Promise<string>;
    /**
     * Clears the signature pad.
     */
    clear(): void;
    getLabelProps(): T["element"];
    getRootProps(): T["element"];
    getControlProps(): T["element"];
    getSegmentProps(): T["svg"];
    getSegmentPathProps(props: SegmentPathProps): T["path"];
    getHiddenInputProps(props: HiddenInputProps): T["input"];
    getGuideProps(): T["element"];
    getClearTriggerProps(): T["element"];
}

declare function connect<T extends PropTypes>(service: SignaturePadService, normalize: NormalizeProps<T>): SignaturePadApi<T>;

declare const machine: _zag_js_core.Machine<SignaturePadSchema>;

declare const props: (keyof SignaturePadProps)[];
declare const splitProps: <Props extends Partial<SignaturePadProps>>(props: Props) => [Partial<SignaturePadProps>, Omit<Props, keyof SignaturePadProps>];

export { type SignaturePadApi as Api, type DataUrlType, type DrawDetails, type DrawEndDetails, type DrawingOptions, type ElementIds, type HiddenInputProps, type IntlTranslations, type SignaturePadMachine as Machine, type SignaturePadProps as Props, type SegmentPathProps, type SignaturePadService as Service, anatomy, connect, machine, props, splitProps };
