import quickSort from "../../src/algorithms/QuickSort";
import selectionSort from "../../src/algorithms/SelectionSort";

test('subarrays in quicksort', ()=>{
   let array = [2, 5, 7, 3, 1, 9, 4];
   quickSort(array, array, 0, 7, 6);
   expect(array).toEqual([1, 2, 3, 4, 5, 7, 9]);

   array = [10, 4, 7, 8, 17, 3, 9, 6];
   quickSort(array, array, 0, 8, 7);
   expect(array).toEqual([3, 4, 6, 7, 8, 9, 10, 17]);

   array = [4, 6, 1];
   quickSort(array, array, 0, 3, 2);
   expect(array).toEqual([1, 4, 6]);

   array = [4, -5 , 13, 78, 2, 34, -9, 0, 8, 25];
   quickSort(array, array, 0, 10, 9);
   expect(array).toEqual([-9, -5, 0, 2, 4, 8, 13, 25, 34, 78]);
});