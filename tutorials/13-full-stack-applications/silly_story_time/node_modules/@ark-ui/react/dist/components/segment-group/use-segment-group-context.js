'use client';
import { createContext } from '../../utils/create-context.js';

const [SegmentGroupProvider, useSegmentGroupContext] = createContext({
  name: "SegmentGroupContext",
  hookName: "useSegmentGroupContext",
  providerName: "<SegmentGroupProvider />"
});

export { SegmentGroupProvider, useSegmentGroupContext };
