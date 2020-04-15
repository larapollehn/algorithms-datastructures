export class Node<T> {
    public readonly value: T;
    public next: Node<T>;
    public previous: Node<T> = null;

    constructor(value: T, next: Node<T>, previous: Node<T>) {
        this.value = value;
        this.next = next;
        this.previous = previous;
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

    /**
     * Iterate the Stack and return the whole content in FIFO manner
     */
    iterate(): Array<T> {
        let iteratedStack: Array<T> = new Array<T>();
        let current = this.head;
        while (current !== null) {
            iteratedStack.push(current.value);
            current = current.next;
        }
        return iteratedStack;
    }
}