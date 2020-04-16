export function multiply(matrixA: Array<Array<number>>, matrixB: Array<Array<number>>): Array<Array<number>> {
    let matrixC:Array<Array<number>> = [];

    if (matrixA.length !== 0 && matrixB.length !== 0 && matrixA[0].length === matrixB.length){
        let bTranspose: Array<Array<number>> = [];
        for(let i = 0; i < matrixB[0].length; i++){
            let temp:Array<number> = [];
            for(let j = 0; j < matrixA[0].length; j++){
                temp.push(matrixB[j][i]);
            }
            bTranspose.push(temp);
        }

        for(let i = 0; i < matrixA.length; i++){
            let temp: Array<number> = [];
            for(let j = 0; j < matrixB[0].length; j++){
                let sum: number = 0;
                for(let z = 0; z < matrixB.length; z++){
                    sum += (matrixA[i][z] * bTranspose[j][z]);
                }
                temp[j] = sum;
            }
            matrixC.push(temp);
        }
        return matrixC;
    }else{
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

