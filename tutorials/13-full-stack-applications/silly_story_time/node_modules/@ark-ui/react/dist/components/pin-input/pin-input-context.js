'use client';
import { usePinInputContext } from './use-pin-input-context.js';

const PinInputContext = (props) => props.children(usePinInputContext());

export { PinInputContext };
