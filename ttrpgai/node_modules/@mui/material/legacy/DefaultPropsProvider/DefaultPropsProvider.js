'use client';

import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import SystemDefaultPropsProvider, { useDefaultProps as useSystemDefaultProps } from '@mui/system/DefaultPropsProvider';
import { jsx as _jsx } from "react/jsx-runtime";
function DefaultPropsProvider(props) {
  return /*#__PURE__*/_jsx(SystemDefaultPropsProvider, _extends({}, props));
}
process.env.NODE_ENV !== "production" ? DefaultPropsProvider.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object.isRequired
} : void 0;
export default DefaultPropsProvider;
export function useDefaultProps(params) {
  return useSystemDefaultProps(params);
}