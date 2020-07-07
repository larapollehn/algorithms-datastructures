export function multiply(matrixA: Array<Array<number>>, matrixB: Array<Array<number>>): Array<Array<number>> {
    if (matrixA.length !== 0 && matrixB.length !== 0 && matrixA[0].length === matrixB.length) {
        let matrixC: Array<Array<number>> = [];
        for (let i = 0; i < matrixA.length; i++) {
            let temp: Array<number> = [];
            for (let k = 0; k < matrixB[0].length; k++) {
                let sum: number = 0;
                for (let j = 0; j < matrixB.length; j++) {
                    sum += (matrixA[i][j] * matrixB[j][k]);
                }
                temp[k] = sum;
            }
            matrixC.push(temp);
        }
        return matrixC;
    } else {
        throw new Error("The two Matrix-arrays are not compatible");
    }
}

export function randomMatrix(height: number, width: number) : Array<Array<number>>{
    let matrix:Array<Array<number>> = [];
    for(let i = 0; i < height; i++){
        let temp: Array<number> = [];
        for(let j = 0; j < width; j++){
            temp.push(Math.floor(Math.random() * 100));
        }
        matrix.push(temp);
    }
    return matrix;
}

