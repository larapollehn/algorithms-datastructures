import Point2D from "../../src/math/EuclideanDistance";

test('creating new point works', () => {
    let point1: Point2D = new Point2D(12, 4);
    expect(point1.x).toBe(12);
    expect(point1.y).toBe(4);

    let point2: Point2D = new Point2D(-30, 0.6);
    expect(point2.x).toBe(-30);
    expect(point2.y).toBe(0.6);
});

test('calculating the euclidean distance works - testcase 1', () =>{
    let point1: Point2D = new Point2D(12, 4);
    let point2: Point2D = new Point2D(2, 45);
    let distance: number = point1.distance(point2);
    expect(Number(distance.toFixed(2))).toBe(42.20);
});

test('calculating the euclidean distance works - testcase 2', () =>{
    let point1: Point2D = new Point2D(-23, 498);
    let point2: Point2D = new Point2D(0, 21);
    let distance: number = point1.distance(point2);
    expect(Number(distance.toFixed(2))).toBe(477.55);
});

test('calculating the euclidean distance works - testcase 3', () =>{
    let point1: Point2D = new Point2D(0.5, 0.76);
    let point2: Point2D = new Point2D(2.4, 9.1);
    let distance: number = point1.distance(point2);
    expect(Number(distance.toFixed(2))).toBe(8.55);
});