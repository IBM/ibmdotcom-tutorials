'use client';

import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import { unstable_debounce as debounce, unstable_useForkRef as useForkRef, unstable_useEnhancedEffect as useEnhancedEffect, unstable_useEventCallback as useEventCallback, unstable_ownerWindow as ownerWindow } from '@mui/utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
var styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
function isObjectEmpty(object) {
  // eslint-disable-next-line
  for (var _ in object) {
    return false;
  }
  return true;
}
function isEmpty(obj) {
  return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
}

/**
 *
 * Demos:
 *
 * - [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize/)
 *
 * API:
 *
 * - [TextareaAutosize API](https://mui.com/material-ui/api/textarea-autosize/)
 */
var TextareaAutosize = /*#__PURE__*/React.forwardRef(function TextareaAutosize(props, forwardedRef) {
  var onChange = props.onChange,
    maxRows = props.maxRows,
    _props$minRows = props.minRows,
    minRows = _props$minRows === void 0 ? 1 : _props$minRows,
    style = props.style,
    value = props.value,
    other = _objectWithoutProperties(props, ["onChange", "maxRows", "minRows", "style", "value"]);
  var _React$useRef = React.useRef(value != null),
    isControlled = _React$useRef.current;
  var textareaRef = React.useRef(null);
  var handleRef = useForkRef(forwardedRef, textareaRef);
  var heightRef = React.useRef(null);
  var hiddenTextareaRef = React.useRef(null);
  var calculateTextareaStyles = React.useCallback(function () {
    var textarea = textareaRef.current;
    var hiddenTextarea = hiddenTextareaRef.current;
    if (!textarea || !hiddenTextarea) {
      return undefined;
    }
    var containerWindow = ownerWindow(textarea);
    var computedStyle = containerWindow.getComputedStyle(textarea);

    // If input's width is shrunk and it's not visible, don't sync height.
    if (computedStyle.width === '0px') {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    hiddenTextarea.style.width = computedStyle.width;
    hiddenTextarea.value = textarea.value || props.placeholder || 'x';
    if (hiddenTextarea.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      hiddenTextarea.value += ' ';
    }
    var boxSizing = computedStyle.boxSizing;
    var padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    var border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

    // The height of the inner content
    var innerHeight = hiddenTextarea.scrollHeight;

    // Measure height of a textarea with a single row
    hiddenTextarea.value = 'x';
    var singleRowHeight = hiddenTextarea.scrollHeight;

    // The height of the outer content
    var outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle: outerHeightStyle,
      overflowing: overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  var didHeightChange = useEventCallback(function () {
    var textarea = textareaRef.current;
    var textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
      return false;
    }
    var outerHeightStyle = textareaStyles.outerHeightStyle;
    return heightRef.current != null && heightRef.current !== outerHeightStyle;
  });
  var syncHeight = React.useCallback(function () {
    var textarea = textareaRef.current;
    var textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
      return;
    }
    var outerHeightStyle = textareaStyles.outerHeightStyle;
    if (heightRef.current !== outerHeightStyle) {
      heightRef.current = outerHeightStyle;
      textarea.style.height = "".concat(outerHeightStyle, "px");
    }
    textarea.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
  }, [calculateTextareaStyles]);
  var frameRef = React.useRef(-1);
  useEnhancedEffect(function () {
    var debouncedHandleResize = debounce(syncHeight);
    var textarea = textareaRef == null ? void 0 : textareaRef.current;
    if (!textarea) {
      return undefined;
    }
    var containerWindow = ownerWindow(textarea);
    containerWindow.addEventListener('resize', debouncedHandleResize);
    var resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(function () {
        if (didHeightChange()) {
          // avoid "ResizeObserver loop completed with undelivered notifications" error
          // by temporarily unobserving the textarea element while manipulating the height
          // and reobserving one frame later
          resizeObserver.unobserve(textarea);
          cancelAnimationFrame(frameRef.current);
          syncHeight();
          frameRef.current = requestAnimationFrame(function () {
            resizeObserver.observe(textarea);
          });
        }
      });
      resizeObserver.observe(textarea);
    }
    return function () {
      debouncedHandleResize.clear();
      cancelAnimationFrame(frameRef.current);
      containerWindow.removeEventListener('resize', debouncedHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight, didHeightChange]);
  useEnhancedEffect(function () {
    syncHeight();
  });
  var handleChange = function handleChange(event) {
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx("textarea", _extends({
      value: value,
      onChange: handleChange,
      ref: handleRef
      // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: minRows,
      style: style
    }, other)), /*#__PURE__*/_jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: hiddenTextareaRef,
      tabIndex: -1,
      style: _extends({}, styles.shadow, style, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" ? TextareaAutosize.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  placeholder: PropTypes.string,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * @ignore
   */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.number, PropTypes.string])
} : void 0;
export default TextareaAutosize;