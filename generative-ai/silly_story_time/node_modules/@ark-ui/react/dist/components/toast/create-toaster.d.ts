import * as toast from '@zag-js/toast';
export interface CreateToasterProps extends toast.StoreProps {
}
export interface CreateToasterReturn extends toast.Store {
}
export declare const createToaster: (props: toast.StoreProps) => toast.Store;
