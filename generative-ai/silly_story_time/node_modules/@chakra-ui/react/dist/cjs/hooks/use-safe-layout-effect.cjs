"use strict";
"use client";
'use strict';

var React = require('react');

const useSafeLayoutEffect = typeof globalThis?.document !== "undefined" ? React.useLayoutEffect : React.useEffect;

exports.useSafeLayoutEffect = useSafeLayoutEffect;
