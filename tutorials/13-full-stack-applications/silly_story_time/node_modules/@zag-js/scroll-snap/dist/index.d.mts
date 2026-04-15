type ScrollAxis = "x" | "y";
type ScrollDirection = "left" | "right" | "up" | "down";
type ScrollSnapAlignment = "start" | "end" | "center" | "none";
type SnapPositionList = Record<Exclude<ScrollSnapAlignment, "none">, Array<{
    node: Element;
    position: number;
}>>;
declare function getSnapPositions(parent: HTMLElement, subtree?: boolean): Record<ScrollAxis, SnapPositionList>;
declare function getScrollSnapPositions(element: HTMLElement): Record<ScrollAxis, number[]>;
declare function findSnapPoint(parent: HTMLElement, axis: ScrollAxis, predicate: (node: HTMLElement) => boolean): number | undefined;
declare function getSnapPointTarget(parent: HTMLElement, snapPoint: number): HTMLElement;

export { type ScrollAxis, type ScrollDirection, type ScrollSnapAlignment, type SnapPositionList, findSnapPoint, getScrollSnapPositions, getSnapPointTarget, getSnapPositions };
