import {factorial, recursive_factorial} from "../../src/math/Factorial";

test('factorial works - testcases 1', () => {
    expect(factorial(9)).toBe(362880);
    expect(factorial(6)).toBe(720);
    expect(factorial(4)).toBe(24);
    expect(factorial(2)).toBe(2);
    expect(factorial(1)).toBe(1);
});

test('factorial works - testcases recursive', () => {
    expect(recursive_factorial(9)).toBe(362880);
    expect(recursive_factorial(6)).toBe(720);
    expect(recursive_factorial(4)).toBe(24);
    expect(recursive_factorial(2)).toBe(2);
    expect(recursive_factorial(1)).toBe(1);
});