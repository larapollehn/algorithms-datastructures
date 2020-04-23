import {mergeSort, merge} from "../../src/algorithms/MergeSort";

test('merge sort on array works', () =>{
    let unsorted:Array<number> = [5, 2, 4, 7, 1, 3, 2, 6];
    const expected_outcome = [1, 2, 2, 3, 4, 5, 6, 7];
    let sorted = mergeSort(unsorted);
    expect(sorted).toEqual(expected_outcome);
});

test('merge on an array works', () =>{
   let unmerged = [1, 3, 5, 2, 4, 7];
   merge(unmerged, 0, 3, 6);
   let expected_outcome = [1, 2, 3, 4, 5, 7];
   expect(unmerged).toEqual(expected_outcome);
});