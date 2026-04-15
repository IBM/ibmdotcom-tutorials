import { PropTypes } from '@zag-js/react';
import { Provider } from 'react';
import type * as tour from '@zag-js/tour';
export interface UseTourContext extends tour.Api<PropTypes> {
}
export declare const TourProvider: Provider<UseTourContext>, useTourContext: () => UseTourContext;
