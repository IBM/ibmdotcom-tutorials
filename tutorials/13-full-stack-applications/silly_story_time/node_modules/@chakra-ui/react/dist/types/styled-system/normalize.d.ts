import { type Dict } from "../utils";
import { type SystemContext } from "./types";
export declare function createNormalizeFn(context: {
    utility: SystemContext["utility"];
    normalize: SystemContext["normalizeValue"];
}): (styles: Dict) => import("../utils").MappedObject<Dict, any>;
