import selectionSort from "./SelectionSort";

test('Sorting an array with selectionSort works', () =>{
    let unsorted1: Array<number>  = [1, 2, 6, 9, 3, 8];
    selectionSort(unsorted1);
    expect(unsorted1).toEqual([1, 2, 3, 6, 8, 9]);

    let unsorted2: Array<number> = [7, 3, 4, 8, 2];
    selectionSort(unsorted2);
    expect(unsorted2).toEqual([2, 3, 4, 7, 8]);
});