import Assoc from "../common/Assoc";

/**
 * `Associative` is any string-value map.
 */
export interface Associative extends Assoc { }

/**
 * `Action` is used by `Actor` to affect the content of the storage. This
 * interface specifies minimal properties possessed by an action and leaves the
 * implementation to decide on any additional data they intend to transfer.
 *
 * @param    name - Unique `Symbol` carrying the identifying information for an
 *                  `Action`. Used internally to disambiguate the actuon in
 *                  question, passing it down a certain route in the action
 *                  dispatcher.
 *
 * @param payload - Associative structure containing the data passed in action.
 *                  The above suggests that the data may also be absent,
 *                  depending on an actual implementation.
 */
export default interface Action {
  name: Symbol
  payload: Associative
}
