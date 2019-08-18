import Assoc from './Assoc';
import Sets from './sets';
import { areArrays, areObjects } from './guards';

export const REMOVED = Symbol('remove');

/** A = B, shallow */
export const shallowEq = (a: Assoc, b: Assoc): boolean => {
  // We will need just one set of keys later on.
  const keys = Object.keys(a);

  // If key sets aren't equal, there's no shallow equality between objects
  if (!Sets.shallowEq(keys, Object.keys(b))) return false;

  // Logical sum of equalities
  return keys.reduce((acc: boolean, k) => acc && a[k] === b[k], true);
};

export const deepEq = (a: Assoc, b: Assoc): boolean =>
  JSON.stringify(a) === JSON.stringify(b);

export const diff = (a: Assoc, b: Assoc) => {
  const delta: Assoc = {};

  const [kA, kB] = [a, b].map(Object.keys);

  const removedKeys = Sets.complement(kA, kB);
  const createdKeys = Sets.complement(kB, kA);
  const otherKeys = Sets.complement(kA, removedKeys);

  removedKeys.forEach(k => { delta[k] = REMOVED });
  createdKeys.forEach(k => { delta[k] = b[k] });
  otherKeys.forEach(k => {
    // Arrays, of all objects, are special.
    if (areArrays([a[k], b[k]]) && !Sets.shallowEq(a[k], b[k])) {
      delta[k] = b[k];
      return;
    }

    // Objects must be recursively diffed.
    if (areObjects([a[k], b[k]])) {
      const innerDiff = diff(a[k], b[k]);
      if (Object.keys(innerDiff).length) delta[k] = innerDiff;
      return;
    }

    // Other things just go by value.
    delta[k] = b[k];
    return;
  });

  return diff;
};

export default {
  shallowEq,
  deepEq,
  diff,
  REMOVED,
};
