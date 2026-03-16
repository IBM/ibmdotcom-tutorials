"use strict";
"use client";
'use strict';

var React = require('react');
var provider = require('./provider.cjs');

function useToken(category, token) {
  const sys = provider.useChakraContext();
  return React.useMemo(() => {
    const arr = Array.isArray(token) ? token : [token];
    return arr.map((t) => sys.token(`${category}.${t}`, t));
  }, [sys, category, token]);
}

exports.useToken = useToken;
