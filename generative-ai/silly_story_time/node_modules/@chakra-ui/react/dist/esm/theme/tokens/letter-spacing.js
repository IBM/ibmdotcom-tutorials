"use strict";
import { defineTokens } from '../../styled-system/config.js';

const letterSpacings = defineTokens.letterSpacings({
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  wide: { value: "0.025em" },
  wider: { value: "0.05em" },
  widest: { value: "0.1em" }
});

export { letterSpacings };
