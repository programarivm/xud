declare namespace FastPriorityQueue {
  export class FastPriorityQueue<T> {
    /** the provided comparator function should take a, b and return *true* when a < b */
    constructor(comparator: (a: T, b: T) => boolean);
    /** testing 123 */
    add: (value: T) => void;
    clone: () => FastPriorityQueue<T>;
    forEach: (callback: (value: T, index: number) => void) => void;
    heapify: (array: T[]) => void;
    isEmpty: () => boolean;
    peek: () => T | undefined;
    poll: () => T | undefined;
    remove: (value: T) => boolean;
    removeMany: (callback: (a: T) => boolean, limit?: number) => T[];
    removeOne: (callback: (a: T) => boolean) => T | undefined;
    replaceTop: (value: T) => T | undefined;
    size: number;
    trim: () => void;
  }
}

declare module 'fastpriorityqueue' {
  import fpq = FastPriorityQueue.FastPriorityQueue;
  export = fpq;
}