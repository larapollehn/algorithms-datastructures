import {Queue} from "../../src/datastructure/Queue";

test('pushing new node onto stack works', () =>{
    const queue: Queue<string> = new Queue();

    queue.queue("Eins");
    expect(queue.head.value).toBe("Eins");
    expect(queue.tail.value).toBe("Eins");

    queue.queue("Zwei");
    expect(queue.head.value).toBe("Eins");
    expect(queue.tail.value).toBe("Zwei");
    expect(queue.head.next.value).toBe("Zwei");
    expect(queue.tail.previous.value).toBe("Eins");

    queue.queue("Drei");
    expect(queue.head.value).toBe("Eins");
    expect(queue.tail.value).toBe("Drei");
    expect(queue.head.next.value).toBe("Zwei");
    expect(queue.tail.previous.value).toBe("Zwei");
});

test('removing node from queue works', () =>{
    const queue: Queue<number> = new Queue();
    queue.queue(1);
    queue.queue(2);
    queue.queue(3);
    queue.queue(4);
    let dequeudNode = queue.dequeue();
    expect(dequeudNode.value).toBe(1);
    expect(queue.head.value).toBe(2);
    expect(queue.head.next.value).toBe(3);
    expect(queue.tail.value).toBe(4);
});

test('iterating the queue works', () =>{
    const queue: Queue<number> = new Queue();
    queue.queue(12);
    queue.queue(9);
    queue.queue(34);
    queue.queue(2);
    queue.queue(7);
    let iteratedQueue = queue.iterate();
    const expected = [7, 2, 34, 9, 12];
    for (let i = 0; i < iteratedQueue.length; i++) {
        expect(iteratedQueue[i]).toEqual(expected[i]);
    }
    expect(iteratedQueue.length).toEqual(expected.length);
});