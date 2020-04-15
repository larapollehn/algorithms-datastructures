export class Node<T> {
    public readonly value: T;
    public next: Node<T>;
    public previous: Node<T> = null;

    constructor(value: T, next: Node<T>, previous: Node<T>) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    compareTo(otherNode: Node<T>): number {
        if (this.value === otherNode.value) {
            return 0
        } else {
            return 1;
        }
    }
}

export class Stack<T>{
    public head: Node<T> = null;
    public tail: Node<T> = null;

    /**
     * Add a new element to the stack
     * @param value new value
     */
    push(value: T): void {
        let incoming = new Node(value, null, null);
        if(this.head === null){
            this.head = incoming;
            this.tail = incoming;
        }else{
            let currentTail = this.tail;
            currentTail.next = incoming;
            this.tail = incoming;
            this.tail.previous = currentTail;
        }
    }

    /**
     * Remove and return the next element of the stack
     */
    pop(): Node<T>{
        if(this.head === null && this.tail === null){
            return null;
        }else{
            let currentTail = this.tail;
            this.tail = this.tail.previous;
            this.tail.next = null;
            return currentTail;
        }
    }
}