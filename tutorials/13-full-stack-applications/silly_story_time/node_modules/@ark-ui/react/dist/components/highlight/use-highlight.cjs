'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const highlightWord = require('@zag-js/highlight-word');
const react = require('react');

const useHighlight = (props) => {
  return react.useMemo(() => highlightWord.highlightWord(props), [props]);
};

exports.useHighlight = useHighlight;
