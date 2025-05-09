import { UseCarouselReturn } from './use-carousel';
import { Provider } from 'react';
export interface UseCarouselContext extends UseCarouselReturn {
}
export declare const CarouselProvider: Provider<UseCarouselContext>, useCarouselContext: () => UseCarouselContext;
