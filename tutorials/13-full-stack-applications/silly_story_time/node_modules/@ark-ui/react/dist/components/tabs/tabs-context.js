'use client';
import { useTabsContext } from './use-tabs-context.js';

const TabsContext = (props) => props.children(useTabsContext());

export { TabsContext };
