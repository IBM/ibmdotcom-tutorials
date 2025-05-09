'use client';
import { highlightWord } from '@zag-js/highlight-word';
import { useMemo } from 'react';

const useHighlight = (props) => {
  return useMemo(() => highlightWord(props), [props]);
};

export { useHighlight };
