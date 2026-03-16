import { NodeProps } from '@zag-js/tree-view';
import { Provider } from 'react';
export interface UseTreeViewNodePropsContext extends NodeProps {
}
export declare const TreeViewNodePropsProvider: Provider<UseTreeViewNodePropsContext>, useTreeViewNodePropsContext: () => UseTreeViewNodePropsContext;
