import {LinkedList, Node} from "../../src/datastructure/LinkedList";

test('creating new Node works', () => {
    const node1 = new Node("Henlo");
    expect(node1.value).toBe("Henlo");
    expect(node1.next).toBe(null);
});

test('comparing two Nodes works', () => {
    const node1 = new Node("Henlo");
    const node2 = new Node("Hallo");
    expect(node1.compareTo(node1)).toEqual(0);
    expect(node1.compareTo(node2)).toEqual(1);
});

test('Inserting Nodes in LinkedList works', () => {
    const list = new LinkedList<number>();
    expect(list.head).toBe(null);
    list.insert(0);
    list.insert(1);
    list.insert(4);
    list.insert(17);
    expect(list.head.value).toBe(0);
    expect(list.head.next.value).toBe(1);
    expect(list.head.next.next.value).toBe(4);
    expect(list.head.next.next.next.value).toBe(17);
});

test('Iterating LinkedList works', () => {
    const list = new LinkedList<number>();
    expect(list.head).toBe(null);
    list.insert(0);
    list.insert(1);
    list.insert(4);
    list.insert(17);
    const nodeList: Array<number> = list.iterate();
    const expected = [0, 1, 4, 17];
    for (let i = 0; i < nodeList.length; i++) {
        expect(nodeList[i]).toEqual(expected[i]);
    }
    expect(nodeList.length).toEqual(expected.length);
});

test('Searching for value in LinkedList', () => {
    const list = new LinkedList<number>();
    list.insert(0);
    list.insert(1);
    list.insert(4);
    list.insert(17);
    expect(list.has(17)).toBe(true);
    expect(list.has(5)).toBe(false);
});

test('Removing first Node that matches searched value works', () =>{
    const list = new LinkedList<number>();
    list.insert(0);
    list.insert(1);
    list.insert(4);
    list.insert(17);
    list.removeFirst(4);
    expect(list.has(4)).toBe(false);
});

test('Removing Duplicate works', () =>{
    const list = new LinkedList<number>();
    list.insert(0);
    list.insert(1);
    list.insert(1);
    list.insert(1);
    list.insert(1);
    list.insert(1);
    list.removeDuplicate();
    const nodeList: Array<number> = list.iterate();
    const expected = [0, 1];
    for (let i = 0; i < nodeList.length; i++) {
        expect(nodeList[i]).toEqual(expected[i]);
    }
    expect(nodeList.length).toEqual(expected.length);
});

