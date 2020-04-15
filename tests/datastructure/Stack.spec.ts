import {Stack, Node} from "../../src/datastructure/Stack";

test('ading node works', () =>{
   let node: Node<string> = new Node("Henlo", null, null);
   expect(node.value).toBe("Henlo");
   expect(node.next).toBe(null);
   expect(node.previous).toBe(null);
});

test('comparing two Nodes works', () => {
    const node1 = new Node("Henlo", null, null);
    const node2 = new Node("Hallo", null, null);
    expect(node1.compareTo(node1)).toEqual(0);
    expect(node1.compareTo(node2)).toEqual(1);
});

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