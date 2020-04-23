export function mergeSort<T>(input: Array<T>): Array<T> {
    if (input.length > 1) {
        let [left, right] = getSubArray(input);
        return merge(mergeSort(left), mergeSort(right));
    } else {
        return input;
    }
}

export function getSubArray<T>(input: Array<T>): Array<Array<T>> {
    let left = Array<T>();
    let right = Array<T>();
    let m = getMiddle(0, input.length);
    for(let i = 0; i < input.length; i++){
        if(i < m){
            left.push(input[i]);
        }else{
            right.push(input[i]);
        }
    }
    return [left, right];
}

export function merge<T>(left: Array<T>, right: Array<T>): Array<T> {
    const output = new Array<T>();
    while(left.length != 0 && right.length != 0){
        if(left[0] > right[0]){
            output.push(right[0]);
            right.shift();
        }else if(left[0] < right[0]){
            output.push(left[0]);
            left.shift();
        }else{
            output.push(left[0]);
            output.push(right[0]);
            right.shift();
            left.shift();
        }
    }
    while(left.length != 0){
        output.push(left[0]);
        left.shift();
    }
    while(right.length != 0){
        output.push(right[0]);
        right.shift();
    }
    return output;
}

export function getMiddle(l: number, r: number): number {
    return Math.floor(l + (r - l) / 2);
}