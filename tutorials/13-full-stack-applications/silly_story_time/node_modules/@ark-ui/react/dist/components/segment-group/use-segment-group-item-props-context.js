'use client';
import { createContext } from '../../utils/create-context.js';

const [SegmentGroupItemPropsProvider, useSegmentGroupItemPropsContext] = createContext({
  name: "SegmentGroupItemPropsContext",
  hookName: "useSegmentGroupItemPropsContext",
  providerName: "<SegmentGroupItemPropsProvider />"
});

export { SegmentGroupItemPropsProvider, useSegmentGroupItemPropsContext };
