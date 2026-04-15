"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const semanticRadii = config.defineSemanticTokens.radii({
  l1: { value: "{radii.xs}" },
  l2: { value: "{radii.sm}" },
  l3: { value: "{radii.md}" }
});

exports.semanticRadii = semanticRadii;
