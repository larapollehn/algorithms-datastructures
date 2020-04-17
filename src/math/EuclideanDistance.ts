export default class Point2D{
    private _x: number;
    private _y: number;


    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    distance(otherPoint: Point2D): number{
        return Math.sqrt(Math.pow(this.x - otherPoint.x,2) + Math.pow(this.y - otherPoint.y, 2));
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
}