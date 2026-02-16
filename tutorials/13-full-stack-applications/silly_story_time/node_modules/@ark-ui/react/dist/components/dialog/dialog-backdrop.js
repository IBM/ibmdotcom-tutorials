'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { useRenderStrategyPropsContext } from '../../utils/render-strategy.js';
import { ark } from '../factory.js';
import { usePresence } from '../presence/use-presence.js';
import { useDialogContext } from './use-dialog-context.js';

const DialogBackdrop = forwardRef((props, ref) => {
  const dialog = useDialogContext();
  const renderStrategyProps = useRenderStrategyPropsContext();
  const presence = usePresence({ ...renderStrategyProps, present: dialog.open });
  const mergedProps = mergeProps(dialog.getBackdropProps(), presence.getPresenceProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref) });
});
DialogBackdrop.displayName = "DialogBackdrop";

export { DialogBackdrop };
