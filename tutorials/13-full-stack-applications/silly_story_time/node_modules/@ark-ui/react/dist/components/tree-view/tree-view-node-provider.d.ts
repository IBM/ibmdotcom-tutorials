import { NodeProps } from '@zag-js/tree-view';
export interface TreeViewNodeProviderBaseProps<T> extends NodeProps {
    node: T;
}
export interface TreeViewNodeProviderProps<T> extends TreeViewNodeProviderBaseProps<T> {
    children?: React.ReactNode;
}
export declare function TreeViewNodeProvider<T>(props: TreeViewNodeProviderProps<T>): import("react/jsx-runtime").JSX.Element;
