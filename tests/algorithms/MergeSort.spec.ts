import {mergeSort, merge, divide} from "../../src/algorithms/MergeSort";
import exp = require("constants");

test('merge sort on array works', () =>{
    let unsorted:Array<number> = [5, 2, 4, 7, 1, 3, 2, 6];
    const expected_outcome = [1, 2, 2, 3, 4, 5, 6, 7];
    let sorted = mergeSort(unsorted);
    expect(sorted).toEqual(expected_outcome);
});

test('merge on an array works -even array length', () =>{
   let unmerged = [1, 3, 5, 2, 4, 7];
   merge(unmerged, 0, 3, 6);
   let expected_outcome = [1, 2, 3, 4, 5, 7];
   expect(unmerged).toEqual(expected_outcome);
});

test('merge on an array works -odd array length', () =>{
    let unmerged = [2, 5, 7, 1, 4];
    merge(unmerged, 0, 3, 5);
    let expected_outcome = [1, 2, 4, 5, 7];
    expect(unmerged).toEqual(expected_outcome);
});

test('dividing an array in two sub arrays works - even', () =>{
   let to_divide =  [2, 5, 7, 1, 4, 6];
   const arrays = divide(to_divide, 0, 3, 6);
   expect(arrays[0]).toEqual([2, 5, 7]);
   expect(arrays[1]).toEqual([1, 4, 6]);
});

test('dividing an array in two sub arrays works - odd', () =>{
    let to_divide =  [2, 5, 7, 1, 4];
    const arrays = divide(to_divide, 0, 3, 5);
    expect(arrays[0]).toEqual([2, 5, 7]);
    expect(arrays[1]).toEqual([1, 4]);
});