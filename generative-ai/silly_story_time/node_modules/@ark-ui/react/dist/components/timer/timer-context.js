'use client';
import { useTimerContext } from './use-timer-context.js';

const TimerContext = (props) => props.children(useTimerContext());

export { TimerContext };
