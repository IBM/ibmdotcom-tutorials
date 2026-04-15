import { NodeState } from '@zag-js/tree-view';
import { Provider } from 'react';
export interface UseTreeViewNodeContext extends NodeState {
}
export declare const TreeViewNodeProvider: Provider<UseTreeViewNodeContext>, useTreeViewNodeContext: () => UseTreeViewNodeContext;
