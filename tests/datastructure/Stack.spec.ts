import {Stack, Node} from "../../src/datastructure/Stack";

test('pushing new node onto stack works', () =>{
   const stack: Stack<string> = new Stack();

   stack.push("Eins");
   expect(stack.head.value).toBe("Eins");
   expect(stack.tail.value).toBe("Eins");

   stack.push("Zwei");
   expect(stack.head.value).toBe("Eins");
   expect(stack.tail.value).toBe("Zwei");
   expect(stack.head.next.value).toBe("Zwei");
   expect(stack.tail.previous.value).toBe("Eins");

   stack.push("Drei");
    expect(stack.head.value).toBe("Eins");
    expect(stack.tail.value).toBe("Drei");
    expect(stack.head.next.value).toBe("Zwei");
    expect(stack.tail.previous.value).toBe("Zwei");
});

test('popping node from stack works', () =>{
    const stack: Stack<string> = new Stack();
    stack.push("Eins");
    stack.push("Zwei");
    stack.push("Drei");
    let poppedNode = stack.pop();
    expect(poppedNode.value).toBe("Drei");
    expect(stack.tail.value).toBe("Zwei");
    expect(stack.tail.next).toBe(null);
    expect(stack.tail.previous.value).toBe("Eins");
    expect(stack.head.value).toBe("Eins");
});

test('iterating the stack works', () => {
    const stack: Stack<number> = new Stack();
    stack.push(1);
    stack.push(7);
    stack.push(23);
    stack.push(4);
    stack.push(12);
    let iteratedStack = stack.iterate();
    const expected = [1, 7, 23, 4, 12];
    for (let i = 0; i < iteratedStack.length; i++) {
        expect(iteratedStack[i]).toEqual(expected[i]);
    }
    expect(iteratedStack.length).toEqual(expected.length);
});