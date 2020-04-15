import {createSecureContext} from "tls";

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

export class Queue<T> {
    public head: Node<T> = null;
    public tail: Node<T> = null;

    /**
     * Add a new element to the queue
     * @param value new value
     */
    queue(value: T): void {
        let incoming = new Node(value, null, null);
        if(this.head === null && this.tail === null){
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
     * Remove and return the next element of the queue
     */
    dequeue(): Node<T> {
        if(this.head === null && this.tail === null){
            return null;
        }else{
            let currentHead = this.head;
            this.head = currentHead.next;
            this.head.previous = null;
            currentHead.next = null;
            return currentHead;
        }


    }

    /**
     * Iterate the Stack and return the whole content in LIFO manner
     */
    iterate(): Array<T> {
        let iteratedQueue = new Array<T>();
        let current = this.tail;
        while(current !== null){
            iteratedQueue.push(current.value);
            current = current.previous;
        }
        return iteratedQueue;
    }
}