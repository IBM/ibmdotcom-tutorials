'use client';
import { useTourContext } from './use-tour-context.js';

const TourContext = (props) => props.children(useTourContext());

export { TourContext };
