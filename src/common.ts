/**
 * Type alias for Node.js callback functions
 */
export type Callback<T = any> = (err?: any | null, result?: T) => void;

/**
 * Return export type for promisified Node.js async methods.
 *
 */
export type PromiseOrVoid<T = any> = PromiseLike<T> | void;
