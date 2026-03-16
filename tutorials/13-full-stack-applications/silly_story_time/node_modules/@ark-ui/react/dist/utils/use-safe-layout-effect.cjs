'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const react = require('react');

const useSafeLayoutEffect = typeof window !== "undefined" ? react.useLayoutEffect : react.useEffect;

exports.useSafeLayoutEffect = useSafeLayoutEffect;
