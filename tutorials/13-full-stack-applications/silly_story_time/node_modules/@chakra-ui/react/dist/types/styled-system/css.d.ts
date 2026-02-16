import { type Dict } from "../utils";
import type { SystemStyleObject } from "./css.types";
import type { SystemContext } from "./types";
type CssFnOptions = Pick<SystemContext, "conditions"> & {
    normalize: (styles: Dict) => Dict;
    transform: (prop: string, value: any) => Dict | undefined;
};
export declare function createCssFn(context: CssFnOptions): (...styleArgs: SystemStyleObject[]) => Dict;
export {};
