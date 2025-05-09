'use client';
import { useTourContext } from './use-tour-context.js';

const TourActions = (props) => props.children(useTourContext().step?.actions ?? []);

export { TourActions };
