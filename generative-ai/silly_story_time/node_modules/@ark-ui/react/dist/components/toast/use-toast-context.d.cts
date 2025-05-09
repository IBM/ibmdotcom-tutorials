import { PropTypes } from '@zag-js/react';
import { ReactNode, Provider } from 'react';
import type * as toast from '@zag-js/toast';
export interface UseToastContext extends toast.Api<PropTypes, ReactNode> {
}
export declare const ToastProvider: Provider<UseToastContext>, useToastContext: () => UseToastContext;
