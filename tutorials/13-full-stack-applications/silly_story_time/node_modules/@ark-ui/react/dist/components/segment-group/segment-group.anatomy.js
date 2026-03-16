'use client';
import { anatomy } from '@zag-js/radio-group';

const segmentGroupAnatomy = anatomy.rename("segment-group");
const parts = segmentGroupAnatomy.build();

export { parts, segmentGroupAnatomy };
