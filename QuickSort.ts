export default function quickSort<T>(input: Array<T>, subarray: Array<T>, start: number, end: number, pivot: number) {
    let pivot_index = start + pivot //6
    let p: T = subarray[pivot]; // 4

    let left: Array<T> = [];
    let right: Array<T> = [];

    subarray.map((elem) =>{
        if (elem < p) {
            left.push(elem);
        } else if (elem > p)  {
            right.push(elem);
        }
    })

    let pivot_place; //3

    if (right.length !== 0) {
        pivot_place = pivot_index - right.length // 6-3 = 3
        input[pivot_place] = p
        quickSort(input, right, pivot_place + 1, pivot_place + right.length + 1, right.length -1);
    } else if (right.length === 0) {
        pivot_place = pivot_index;
        input[pivot_index] = p;
    }

    if (left.length !== 0) {
        quickSort(input, left, pivot_place - left.length, pivot_place - 1, left.length-1);
    }

}
