import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "item" | "ellipsis" | "prevTrigger" | "nextTrigger">;

interface PageChangeDetails {
    page: number;
    pageSize: number;
}
interface PageSizeChangeDetails {
    pageSize: number;
}
interface ItemLabelDetails {
    page: number;
    totalPages: number;
}
interface IntlTranslations {
    rootLabel?: string | undefined;
    prevTriggerLabel?: string | undefined;
    nextTriggerLabel?: string | undefined;
    itemLabel?(details: ItemLabelDetails): string;
}
type ElementIds = Partial<{
    root: string;
    ellipsis(index: number): string;
    prevTrigger: string;
    nextTrigger: string;
    item(page: number): string;
}>;
interface PaginationProps extends DirectionProperty, CommonProperties {
    /**
     * The ids of the elements in the accordion. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * Specifies the localized strings that identifies the accessibility elements and their states
     */
    translations?: IntlTranslations | undefined;
    /**
     * Total number of data items
     */
    count?: number | undefined;
    /**
     * The controlled number of data items per page
     */
    pageSize?: number | undefined;
    /**
     * The initial number of data items per page when rendered.
     * Use when you don't need to control the page size of the pagination.
     * @default 10
     */
    defaultPageSize?: number | undefined;
    /**
     * Number of pages to show beside active page
     * @default 1
     */
    siblingCount?: number | undefined;
    /**
     * The controlled active page
     */
    page?: number | undefined;
    /**
     * The initial active page when rendered.
     * Use when you don't need to control the active page of the pagination.
     * @default 1
     */
    defaultPage?: number | undefined;
    /**
     * Called when the page number is changed
     */
    onPageChange?: ((details: PageChangeDetails) => void) | undefined;
    /**
     * Called when the page size is changed
     */
    onPageSizeChange?: ((details: PageSizeChangeDetails) => void) | undefined;
    /**
     * The type of the trigger element
     * @default "button"
     */
    type?: "button" | "link" | undefined;
}
type PropsWithDefault = "defaultPageSize" | "defaultPage" | "siblingCount" | "translations" | "type" | "count";
interface PrivateContext {
    page: number;
    pageSize: number;
}
type ComputedContext = Readonly<{
    /**
     * Total number of pages
     */
    totalPages: number;
    /**
     * Index of first and last data items on current page
     */
    pageRange: {
        start: number;
        end: number;
    };
    /**
     * The previous page index
     */
    previousPage: number | null;
    /**
     * The next page index
     */
    nextPage: number | null;
    /**
     * Whether the current page is valid
     */
    isValidPage: boolean;
}>;
interface PaginationSchema {
    state: "idle";
    props: RequiredBy<PaginationProps, PropsWithDefault>;
    context: PrivateContext;
    computed: ComputedContext;
    event: EventObject;
    action: string;
    guard: string;
    effect: string;
}
type PaginationService = Service<PaginationSchema>;
type PaginationMachine = Machine<PaginationSchema>;
interface ItemProps {
    type: "page";
    value: number;
}
interface EllipsisProps {
    index: number;
}
type Pages = Array<{
    type: "ellipsis";
} | {
    type: "page";
    value: number;
}>;
interface PageRange {
    start: number;
    end: number;
}
interface PaginationApi<T extends PropTypes = PropTypes> {
    /**
     * The current page.
     */
    page: number;
    /**
     * The total number of data items.
     */
    count: number;
    /**
     * The number of data items per page.
     */
    pageSize: number;
    /**
     * The total number of pages.
     */
    totalPages: number;
    /**
     * The page range. Represented as an array of page numbers (including ellipsis)
     */
    pages: Pages;
    /**
     * The previous page.
     */
    previousPage: number | null;
    /**
     * The next page.
     */
    nextPage: number | null;
    /**
     * The page range. Represented as an object with `start` and `end` properties.
     */
    pageRange: PageRange;
    /**
     * Function to slice an array of data based on the current page.
     */
    slice<V>(data: V[]): V[];
    /**
     * Function to set the page size.
     */
    setPageSize(size: number): void;
    /**
     * Function to set the current page.
     */
    setPage(page: number): void;
    /**
     * Function to go to the next page.
     */
    goToNextPage(): void;
    /**
     * Function to go to the previous page.
     */
    goToPrevPage(): void;
    /**
     * Function to go to the first page.
     */
    goToFirstPage(): void;
    /**
     * Function to go to the last page.
     */
    goToLastPage(): void;
    getRootProps(): T["element"];
    getEllipsisProps(props: EllipsisProps): T["element"];
    getItemProps(page: ItemProps): T["element"];
    getPrevTriggerProps(): T["element"];
    getNextTriggerProps(): T["element"];
}

declare function connect<T extends PropTypes>(service: PaginationService, normalize: NormalizeProps<T>): PaginationApi<T>;

declare const machine: _zag_js_core.Machine<PaginationSchema>;

declare const props: (keyof PaginationProps)[];
declare const splitProps: <Props extends Partial<PaginationProps>>(props: Props) => [Partial<PaginationProps>, Omit<Props, keyof PaginationProps>];
declare const itemProps: (keyof ItemProps)[];
declare const splitItemProps: <Props extends ItemProps>(props: Props) => [ItemProps, Omit<Props, keyof ItemProps>];
declare const ellipsisProps: "index"[];
declare const splitEllipsisProps: <Props extends EllipsisProps>(props: Props) => [EllipsisProps, Omit<Props, "index">];

export { type PaginationApi as Api, type ElementIds, type EllipsisProps, type IntlTranslations, type ItemLabelDetails, type ItemProps, type PaginationMachine as Machine, type PageChangeDetails, type PageSizeChangeDetails, type PaginationProps as Props, type PaginationService as Service, anatomy, connect, ellipsisProps, itemProps, machine, props, splitEllipsisProps, splitItemProps, splitProps };
