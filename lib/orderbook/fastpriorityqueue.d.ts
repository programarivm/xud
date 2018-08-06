declare namespace FastPriorityQueue {
  export class FastPriorityQueue<T> {
    constructor(comparator: (a: T, b: T) => boolean);
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