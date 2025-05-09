"use strict";
import * as React from 'react';
import { isString } from './is.js';

function getElementRef(el) {
  const version = React.version;
  if (!isString(version)) return el?.ref;
  if (version.startsWith("18.")) return el?.ref;
  return el?.props?.ref;
}

export { getElementRef };
