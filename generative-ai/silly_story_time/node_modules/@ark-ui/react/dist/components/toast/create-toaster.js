'use client';
import * as toast from '@zag-js/toast';

const createToaster = (props) => {
  return toast.createStore(props);
};

export { createToaster };
