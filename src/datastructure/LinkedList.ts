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

    removeDuplicate(): void {
        let inSet: Set<T> = new Set();
        let current: Node<T> = this.head;
        let prev: Node<T> = null;
        while (current !== null) {
            if (inSet.has(current.value)) {
                prev.next = current.next;
            }else{
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