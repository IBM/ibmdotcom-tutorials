"use strict";
import { defineTokens } from '../../styled-system/config.js';

const lineHeights = defineTokens.lineHeights({
  shorter: { value: 1.25 },
  short: { value: 1.375 },
  moderate: { value: 1.5 },
  tall: { value: 1.625 },
  taller: { value: 2 }
});

export { lineHeights };
