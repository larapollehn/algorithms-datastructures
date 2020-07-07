export default function insertionSort<T>(input: Array<T>) {
    let i = 1;
    while (i < input.length){
        let j = i;
        while (j > 0){
            let first = input[j];
            let second = input[j-1];
            if(second > first) {
                input[j] = second;
                input[j - 1] = first;
            }
            j--;
        }
        i++;
    }
}