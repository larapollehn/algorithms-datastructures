export default function selectionSort<T>(input: Array<T>) {
    const inputLength = input.length;
    for(let i = 0; i < inputLength-1; i++ ){
        let min = i;
        for(let j = i+1; j < inputLength; j++){
            if(input[j] < input[min]){
                min = j;
            }
        }
        if(min != i){
            let first = input[i];
            input[i] = input[min];
            input[min] = first;
        }
    }
}