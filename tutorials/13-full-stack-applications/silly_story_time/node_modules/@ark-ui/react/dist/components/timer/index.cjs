'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const timerActionTrigger = require('./timer-action-trigger.cjs');
const timerArea = require('./timer-area.cjs');
const timerContext = require('./timer-context.cjs');
const timerControl = require('./timer-control.cjs');
const timerItem = require('./timer-item.cjs');
const timerRoot = require('./timer-root.cjs');
const timerRootProvider = require('./timer-root-provider.cjs');
const timerSeparator = require('./timer-separator.cjs');
const useTimer = require('./use-timer.cjs');
const useTimerContext = require('./use-timer-context.cjs');
const timer$1 = require('./timer.cjs');
const timer = require('@zag-js/timer');



exports.TimerActionTrigger = timerActionTrigger.TimerActionTrigger;
exports.TimerArea = timerArea.TimerArea;
exports.TimerContext = timerContext.TimerContext;
exports.TimerControl = timerControl.TimerControl;
exports.TimerItem = timerItem.TimerItem;
exports.TimerRoot = timerRoot.TimerRoot;
exports.TimerRootProvider = timerRootProvider.TimerRootProvider;
exports.TimerSeparator = timerSeparator.TimerSeparator;
exports.useTimer = useTimer.useTimer;
exports.useTimerContext = useTimerContext.useTimerContext;
exports.Timer = timer$1;
Object.defineProperty(exports, "timerAnatomy", {
  enumerable: true,
  get: () => timer.anatomy
});
