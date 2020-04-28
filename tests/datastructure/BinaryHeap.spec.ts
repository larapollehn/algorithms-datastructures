import MaxBinaryHeap from "../../src/datastructure/BinaryHeap";

test('inserting into MaxBinaryHeap works', () => {
    let maxHeap: MaxBinaryHeap<number> = new MaxBinaryHeap();
    expect(maxHeap.print()).toEqual([]);
    maxHeap.insert(7);
    expect(maxHeap.print()).toEqual([7]);
    maxHeap.insert(13);
    expect(maxHeap.print()).toEqual([13, 7]);
    maxHeap.insert(3);
    expect(maxHeap.print()).toEqual([13, 7, 3]);
    maxHeap.insert(21);
    maxHeap.insert(5);
    expect(maxHeap.print()).toEqual([21, 13, 3, 7, 5]);
    maxHeap.insert(4);
    maxHeap.insert(17);
    expect(maxHeap.print()).toEqual([21, 13, 17, 7, 5, 3, 4]);
    maxHeap.insert(33);
    expect(maxHeap.print()).toEqual([33, 21, 17, 13, 5, 3, 4, 7]);
});