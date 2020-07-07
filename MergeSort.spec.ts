import {mergeSort, merge, getSubArray, getMiddle} from "./MergeSort";
import exp = require("constants");

test('merge sort on array works - case odd 1', () => {
    let outcome = mergeSort([1, 3, 2, 4]);
    expect(outcome).toEqual([1, 2, 3, 4]);

    outcome = mergeSort([1, 3, 2, 4, 5]);
    expect(outcome).toEqual([1, 2, 3, 4, 5]);

    outcome = mergeSort([1, 3, 6, 2, 4, 5]);
    expect(outcome).toEqual([1, 2, 3, 4, 5, 6]);
});
test('merge on an array works -even array length', () => {
    let merged = merge([1, 2, 3], [4, 5, 6]);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);

    merged = merge([1, 3, 5], [2, 4, 6]);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Get subarray', () => {
    let arr = [1, 2, 3, 4];
    let [left, right] = getSubArray(arr);
    expect(left).toEqual([1, 2]);
    expect(right).toEqual([3, 4]);

    arr = [1, 2, 3, 4, 5];
    [left, right] = getSubArray(arr);
    expect(left).toEqual([1, 2]);
    expect(right).toEqual([3, 4, 5])

    arr = [1, 2, 3, 4, 5, 6];
    [left, right] = getSubArray(arr);
    expect(left).toEqual([1, 2, 3]);
    expect(right).toEqual([4, 5, 6]);
});

test('Get middle', () => {
    let m1 = getMiddle(0, 4);
    expect(m1).toEqual(2);

    m1 = getMiddle(0, 5);
    expect(m1).toEqual(2);

    m1 = getMiddle(0, 6);
    expect(m1).toEqual(3);

    m1 = getMiddle(0, 7);
    expect(m1).toEqual(3);

    m1 = getMiddle(0, 8);
    expect(m1).toEqual(4);
});