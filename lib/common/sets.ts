/** A1 \ A2 */
export const complement = <A>(a1: A[], a2: A[]): A[] =>
  a1.filter(a => !a2.includes(a));

/** A1 = A2, shallow */
export const shallowEq = <A>(a1: A[], a2: A[]): boolean => {
  // If A1 \ A2 ≠ ∅, A1 ≠ A2
  if (complement(a1, a2).length) return false;

  // If A2 \ A1 ≠ ∅, A1 ≠ A2
  if (complement(a2, a1).length) return false;

  // A1 = A2
  return true;
};

export default {
  complement,
  shallowEq,
};
