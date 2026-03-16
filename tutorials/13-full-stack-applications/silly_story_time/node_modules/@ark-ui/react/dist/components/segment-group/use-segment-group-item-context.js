'use client';
import { createContext } from '../../utils/create-context.js';

const [SegmentGroupItemProvider, useSegmentGroupItemContext] = createContext({
  name: "SegmentGroupItemContext",
  hookName: "useSegmentGroupItemContext",
  providerName: "<SegmentGroupItemProvider />"
});

export { SegmentGroupItemProvider, useSegmentGroupItemContext };
