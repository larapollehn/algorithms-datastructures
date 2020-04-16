import {multiply, randomMatrix} from "../algorithms/MatrixMultiplying";

const matrixA = randomMatrix(1000,1000);
const matrixB = randomMatrix(1000,1000);

const before = Date.now();
multiply(matrixA, matrixB);
const after = Date.now();
console.log(after-before);