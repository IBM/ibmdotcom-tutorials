import { UseMenuReturn } from './use-menu';
import { Provider } from 'react';
import { Api } from '@zag-js/menu';
import { PropTypes } from '@zag-js/react';
export type UseMenuContext = UseMenuReturn['api'];
export declare const MenuProvider: Provider<Api<PropTypes>>, useMenuContext: () => Api<PropTypes>;
