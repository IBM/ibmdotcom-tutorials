"use strict";
'use strict';

function For(props) {
  const { each, fallback, children } = props;
  if (each?.length === 0) {
    return fallback || null;
  }
  return each?.map(children);
}

exports.For = For;
