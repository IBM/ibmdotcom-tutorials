"use strict";
"use client";
'use strict';

var React = require('react');
var useCallbackRef = require('./use-callback-ref.cjs');

function useDisclosure(props = {}) {
  const handleOpen = useCallbackRef.useCallbackRef(props.onOpen);
  const handleClose = useCallbackRef.useCallbackRef(props.onClose);
  const [openState, setOpen] = React.useState(props.defaultOpen || false);
  const open = props.open !== void 0 ? props.open : openState;
  const controlled = props.open !== void 0;
  const onClose = React.useCallback(() => {
    if (!controlled) setOpen(false);
    handleClose?.();
  }, [controlled, handleClose]);
  const onOpen = React.useCallback(() => {
    if (!controlled) setOpen(true);
    handleOpen?.();
  }, [controlled, handleOpen]);
  const onToggle = React.useCallback(() => {
    if (open) {
      onClose();
    } else {
      onOpen();
    }
  }, [open, onOpen, onClose]);
  return {
    open,
    onOpen,
    onClose,
    onToggle,
    setOpen
  };
}

exports.useDisclosure = useDisclosure;
