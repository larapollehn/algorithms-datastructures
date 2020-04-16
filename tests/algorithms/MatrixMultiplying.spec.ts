import {multiply} from "../../src/algorithms/MatrixMultiplying";

test('multiplying two matrix works - testcase 1', () =>{
    const MA1: Array<Array<number>> = [[1, 2, 3], [4, 5, 6]];
    const MB1: Array<Array<number>> = [[7, 8], [9, 10], [11, 12]];
    expect(MA1[0].length).toEqual(MA1[1].length);
    expect(MA1[0].length).toEqual(MB1.length);
    expect(MA1[0].length).toEqual(MA1[1].length);
    expect(MB1[0].length).toEqual(MB1[1].length);
    expect(MB1[1].length).toEqual(MB1[2].length);

    const expectedMC1: Array<Array<number>> = [[58, 64], [139, 154]];
    const MC1: Array<Array<number>> = multiply(MA1, MB1);
    expect(MC1[0].length).toBe(MB1[0].length);
    expect(MC1.length).toBe(MA1.length);
    expect(MC1[0][0]).toBe(expectedMC1[0][0]);
    expect(MC1[0][1]).toBe(expectedMC1[0][1]);
    expect(MC1[1][0]).toBe(expectedMC1[1][0]);
    expect(MC1[1][1]).toBe(expectedMC1[1][1]);
});

test('multiplying two matrix works - testcase 2', () =>{
    const MA2: Array<Array<number>> = [[1, 2], [3, 4], [5, 6], [7, 8]];
    const MB2: Array<Array<number>> = [[9, 10], [11, 12]];
    expect(MA2[0].length).toEqual(MB2.length);
    expect(MA2[0].length).toEqual(MA2[1].length);
    expect(MA2[2].length).toEqual(MA2[3].length);
    expect(MB2[0].length).toEqual(MB2[1].length);

    const expectedMC2: Array<Array<number>> = [[31, 34], [71, 78], [111, 122], [151, 166]];
    const MC2: Array<Array<number>> = multiply(MA2, MB2);
    expect(MC2[0].length).toBe(MB2[0].length);
    expect(MC2.length).toBe(MA2.length);
    expect(MC2[0][0]).toBe(expectedMC2[0][0]);
    expect(MC2[0][1]).toBe(expectedMC2[0][1]);
    expect(MC2[1][0]).toBe(expectedMC2[1][0]);
    expect(MC2[1][1]).toBe(expectedMC2[1][1]);
    expect(MC2[2][0]).toBe(expectedMC2[2][0]);
    expect(MC2[2][2]).toBe(expectedMC2[2][2]);
    expect(MC2[3][0]).toBe(expectedMC2[3][0]);
    expect(MC2[3][3]).toBe(expectedMC2[3][3]);
});

test('multiplying two matrix works - testcase 3', () =>{
    const MA3: Array<Array<number>> = [[1, 2, 3, 4]];
    const MB3: Array<Array<number>> = [[1, 2], [3, 4], [5, 6], [7, 8]];
    expect(MA3[0].length).toEqual(MB3.length);
    expect(MB3[0].length).toEqual(MB3[1].length);
    expect(MB3[1].length).toEqual(MB3[2].length);
    expect(MB3[2].length).toEqual(MB3[3].length);

    const expectedMC3: Array<Array<number>> = [[50, 60]];
    const MC3: Array<Array<number>> = multiply(MA3, MB3);
    expect(MC3[0].length).toBe(MB3[0].length);
    expect(MC3.length).toBe(MA3.length);
    expect(MC3[0][0]).toBe(expectedMC3[0][0]);
    expect(MC3[0][1]).toBe(expectedMC3[0][1]);
});
