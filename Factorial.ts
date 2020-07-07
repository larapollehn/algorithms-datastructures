export function factorial(num: number): number {
    if(num ===1){return 1}
    let sum: number = 1;
    while(num > 0){
        sum = sum * num;
        num--;
    }
    return sum;
}

export function recursive_factorial(num:number):number {
    return num === 0 || num === 1 ? 1 : num * recursive_factorial(num-1);
}
