import bubbleSort from "./BubbleSort";

test('Sorting an Array with BubbleSort works', () =>{
    let unsorted1: Array<number> = [1, 2, 6, 9, 3, 8];
    bubbleSort(unsorted1);
    expect(unsorted1).toEqual([1, 2, 3, 6, 8, 9]);

    let unsorted2: Array<number>  = [2, 5, 7, 4, 5, 3, 2, 9, 8];
    bubbleSort(unsorted2);
    expect(unsorted2).toEqual([2, 2, 3, 4, 5, 5, 7, 8, 9]);

    let unsorted3: Array<number>  = [2];
    bubbleSort(unsorted3);
    expect(unsorted3).toEqual([2]);
});