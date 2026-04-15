"use strict";
import { defineSemanticTokens } from '../../styled-system/config.js';

const semanticRadii = defineSemanticTokens.radii({
  l1: { value: "{radii.xs}" },
  l2: { value: "{radii.sm}" },
  l3: { value: "{radii.md}" }
});

export { semanticRadii };
