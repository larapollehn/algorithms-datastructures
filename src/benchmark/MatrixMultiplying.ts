import {multiply, randomMatrix} from "../algorithms/MatrixMultiplying";

const matrixA = randomMatrix(5000,5000);
const matrixB = randomMatrix(5000,5000);

const before = Date.now();
multiply(matrixA, matrixB);
const after = Date.now();
console.log(after-before);