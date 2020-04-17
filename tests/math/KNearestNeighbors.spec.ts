import {KNearestNeighbors, Point2D} from "../../src/math/KNearestNeighbors";

test('creating a point works', () =>{
    let point1 = new Point2D(12, 4, 'orange');
    expect(point1.x).toBe(12);
    expect(point1.y).toBe(4);
    expect(point1.label).toBe('orange');

    let point2 = new Point2D(-3, 55, 'blue');
    expect(point2.x).toBe(-3);
    expect(point2.y).toBe(55);
    expect(point2.label).toBe('blue');
});

test('calculating euclidean distance works', () =>{
    let point1 = new Point2D(12, 4, 'orange');
    let point2 = new Point2D(-3, 55, 'blue');
    let distance: number = point1.distance(point2);
    expect(Number(distance.toFixed(2))).toBe(53.16);
});

test('evaluating distance works - testcase 1', () => {
    let point1 = new Point2D(12, 4, 'orange');
    let point2 = new Point2D(-3, 55, 'blue');
    let point3 = new Point2D(1, 6, 'orange');
    let point4 = new Point2D(-20, 3, 'blue');
    let point5 = new Point2D(11, 9, 'orange');
    let point6 = new Point2D(0, 1, 'orange');
    let net = new KNearestNeighbors([point1, point2, point3, point4, point5, point6]);
    let result = net.label(10,10,3);
    expect(result).toBe('orange');
});

test('evaluating distance works - testcase 2', () => {
    let point1 = new Point2D(1, 22, 'orange');
    let point2 = new Point2D(-9, 12, 'blue');
    let point3 = new Point2D(2.45, 2, 'green');
    let point4 = new Point2D(0, 3, 'blue');
    let point5 = new Point2D(163, 2, 'green');
    let point6 = new Point2D(0, 1, 'orange');
    let net = new KNearestNeighbors([point1, point2, point3, point4, point5, point6]);
    let result = net.label(12,1,2);
    expect(result).toBe('green');
});

test('evaluating distance works - testcase 3', () => {
    let point1 = new Point2D(12, 4, 2);
    let point2 = new Point2D(-3, 55, 1);
    let point3 = new Point2D(1, 6, 2);
    let point4 = new Point2D(-20, 3, 1);
    let point5 = new Point2D(11, 9, 2);
    let point6 = new Point2D(0, 1, 2);
    let net = new KNearestNeighbors([point1, point2, point3, point4, point5, point6]);
    let result = net.label(10,10,3);
    expect(result).toBe(2);
});

test('evaluating distance works - testcase 3', () => {
    let net = new KNearestNeighbors([]);
    expect(() => net.label(10,10,3)).toThrow();
});
