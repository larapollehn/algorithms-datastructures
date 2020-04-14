/**
 * Sort an array with bubble sort in place. Do not return anything
 */
export default function bubbleSort<T>(input: Array<T>) {
    const arrayLength: number = input.length;
    let swapped: boolean = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arrayLength - 1; i++) {
            let first = input[i];
            let second = input[i + 1];
            if (second < first) {
                input[i] = second;
                input[i + 1] = first;
                swapped = true;
            }
        }
    }
}