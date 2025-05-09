'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTimerContext = require('./use-timer-context.cjs');

const TimerContext = (props) => props.children(useTimerContext.useTimerContext());

exports.TimerContext = TimerContext;
