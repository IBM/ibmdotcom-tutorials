import { type Dict } from "../utils";
import type { SystemContext } from "./types";
export declare function createSerializeFn(options: Pick<SystemContext, "conditions" | "isValidProperty">): (styles: Dict) => import("../utils").MappedObject<Dict, any>;
