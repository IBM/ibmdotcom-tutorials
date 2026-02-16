"use strict";
'use strict';

var config = require('../../styled-system/config.cjs');

const animations = config.defineTokens.animations({
  spin: { value: "spin 1s linear infinite" },
  ping: { value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite" },
  pulse: { value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
  bounce: { value: "bounce 1s infinite" }
});

exports.animations = animations;
