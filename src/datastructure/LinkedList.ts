export class Node<T> {
    public readonly value: T;
    public next: Node<T> = null;

    constructor(value: T) {
        this.value = value;
    }

    compareTo(otherNode: Node<T>): number {
        if (this.value === otherNode.value) {
            return 0
        } else {
            return 1;
        }
    }
}

export class LinkedList<T> {
    public head: Node<T> = null;

    insert(value: T): void {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current: Node<T> = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeFirst(value: T): void {
        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let current: Node<T> = this.head;
            while (current != null) {
                if (current.next !== null && current.next.value === value) {
                    current.next = current.next.next;
                    break;
                }
                current = current.next;
            }
        }
    }

    /**
     * Sort the element of this linked list in place.
     * Tips: Make use of Bubble Sort or Merge Sort.
     * Tips 2: Don't forget about the method compareTo of the class Node<T>
     * Bonus: Why usage of Bubble Sort instead of Quick Sort
     * input: [1, 5, 3, 7, 4]
     * output: [1, 3, 4, 5, 7]
    sort(): void {
        let swapped: boolean = true;
        while (swapped) {
            swapped = false;
            let current: Node<T> = this.head;
            let prev = null;
            let next = null;
            while (current !== null) {
                next = current.next;
                if (next !== null && next.value < current.value) {
                    if (prev === null) {
                        this.head = next;
                        this.head.next = current;
                        swapped = true;
                    } else {
                        prev.next = next;
                        current.next = next.next;
                        next.next = current;
                        swapped = true;
                    }
                }else{
                    prev = current;
                    current = current.next;
                }
            }
        }
    }
     **/

    /**
     * Merge the content of this linked list with another linked list into a single linked list and return the result back
     * Tips: In doubt, sort two lists.
     * input: [1, 3, 5, 7], [2, 4, 6, 8]
     * output: [1, 2, 3, 4, 5, 6, 7, 8]
     */
    merge(otherList: LinkedList<T>): LinkedList<T> {
        return new LinkedList<T>();
    }

    removeDuplicate(): void {
        let inSet: Set<T> = new Set();
        let current: Node<T> = this.head;
        let prev: Node<T> = null;
        while (current !== null) {
            if (inSet.has(current.value)) {
                prev.next = current.next;
            } else {
                inSet.add(current.value);
                prev = current;
            }
            current = current.next;
        }
    }


    has(value: T): boolean {
        let current: Node<T> = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            } else {
                current = current.next;
            }
        }
        return false;
    }

    iterate(): Array<T> {
        let nodes = new Array<T>();
        let current: Node<T> = this.head;
        while (current !== null) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }
}