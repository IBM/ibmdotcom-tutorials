import { createProxy, isChanged, getUntracked, trackMemo } from 'proxy-compare';
// This is required only for performance.
// https://github.com/dai-shi/proxy-memoize/issues/68
const targetCache = new WeakMap();
// constants from proxy-compare
const HAS_KEY_PROPERTY = 'h';
const ALL_OWN_KEYS_PROPERTY = 'w';
const HAS_OWN_KEY_PROPERTY = 'o';
const KEYS_PROPERTY = 'k';
const trackMemoUntrackedObjSet = new WeakSet();
const isObject = (x) => typeof x === 'object' && x !== null;
const untrack = (x, seen) => {
    if (!isObject(x))
        return x;
    const untrackedObj = getUntracked(x);
    if (untrackedObj) {
        trackMemo(x);
        trackMemoUntrackedObjSet.add(untrackedObj);
        return untrackedObj;
    }
    if (!seen.has(x)) {
        seen.add(x);
        Object.entries(x).forEach(([k, v]) => {
            const vv = untrack(v, seen);
            if (!Object.is(vv, v))
                x[k] = vv;
        });
    }
    return x;
};
const touchAffected = (dst, src, affected) => {
    var _a, _b, _c;
    if (!isObject(dst) || !isObject(src))
        return;
    const untrackedObj = getUntracked(src);
    const used = affected.get(untrackedObj || src);
    if (!used) {
        if (trackMemoUntrackedObjSet.has(untrackedObj)) {
            trackMemo(dst);
        }
        return;
    }
    (_a = used[HAS_KEY_PROPERTY]) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
        Reflect.has(dst, key);
    });
    if (used[ALL_OWN_KEYS_PROPERTY] === true) {
        Reflect.ownKeys(dst);
    }
    (_b = used[HAS_OWN_KEY_PROPERTY]) === null || _b === void 0 ? void 0 : _b.forEach((key) => {
        Reflect.getOwnPropertyDescriptor(dst, key);
    });
    (_c = used[KEYS_PROPERTY]) === null || _c === void 0 ? void 0 : _c.forEach((key) => {
        touchAffected(dst[key], src[key], affected);
    });
};
const isOriginalEqual = (x, y) => {
    for (let xx = x; xx; x = xx, xx = getUntracked(xx))
        ;
    for (let yy = y; yy; y = yy, yy = getUntracked(yy))
        ;
    return Object.is(x, y);
};
// properties
const OBJ_PROPERTY = 'o';
const RESULT_PROPERTY = 'r';
const AFFECTED_PROPERTY = 'a';
/**
 * Create a memoized function
 *
 * @example
 * import { memoize } from 'proxy-memoize';
 *
 * const fn = memoize(obj => ({ sum: obj.a + obj.b, diff: obj.a - obj.b }));
 *
 * @param options
 * @param options.size - (default: 1)
 * @param options.noWeakMap - disable tier-1 cache (default: false)
 */
export function memoize(fn, options) {
    var _a;
    let memoListHead = 0;
    const size = (_a = options === null || options === void 0 ? void 0 : options.size) !== null && _a !== void 0 ? _a : 1;
    const memoList = [];
    const resultCache = (options === null || options === void 0 ? void 0 : options.noWeakMap) ? null : new WeakMap();
    const memoizedFn = (obj) => {
        const cache = resultCache === null || resultCache === void 0 ? void 0 : resultCache.get(obj);
        if (cache) {
            return cache;
        }
        for (let i = 0; i < size; i += 1) {
            const memo = memoList[(memoListHead + i) % size];
            if (!memo)
                break;
            const { [OBJ_PROPERTY]: memoObj, [AFFECTED_PROPERTY]: memoAffected, [RESULT_PROPERTY]: memoResult, } = memo;
            if (!isChanged(memoObj, obj, memoAffected, new WeakMap(), isOriginalEqual)) {
                touchAffected(obj, memoObj, memoAffected);
                resultCache === null || resultCache === void 0 ? void 0 : resultCache.set(obj, memoResult);
                return memoResult;
            }
        }
        const affected = new WeakMap();
        const proxy = createProxy(obj, affected, undefined, targetCache);
        const result = untrack(fn(proxy), new WeakSet());
        touchAffected(obj, obj, affected);
        const entry = {
            [OBJ_PROPERTY]: obj,
            [RESULT_PROPERTY]: result,
            [AFFECTED_PROPERTY]: affected,
        };
        memoListHead = (memoListHead - 1 + size) % size;
        memoList[memoListHead] = entry;
        resultCache === null || resultCache === void 0 ? void 0 : resultCache.set(obj, result);
        return result;
    };
    return memoizedFn;
}
