export class Point2D<T> {
    public readonly x: number;
    public readonly y: number;
    public label: T;

    constructor(x: number, y: number, label: T) {
        this.x = x;
        this.y = y;
        this.label = label;
    }

    distance(otherPoint: Point2D<T>): number {
        return Math.sqrt(Math.pow(this.x - otherPoint.x, 2) + Math.pow(this.y - otherPoint.y, 2));
    }
}

export class KNearestNeighbors<T> {
    private _content: Array<Point2D<T>>;


    constructor(content: Array<Point2D<T>>) {
        this._content = content;
    }

    label(x: number, y: number, k: number): T {
        if (this._content.length !== 0) {
            //calculate euclidean distance of the points in the neighbourhood to the point in question
            //give back nested array with distance and point
            let distanceToPoint: Array<[number, Point2D<T>]> = this._content.map((point: Point2D<T>) => {
                return [Number((new Point2D(x, y, null).distance(point)).toFixed(2)), point];
            });

            //sort points in neighbourhood in ascending order
            let sortedPointsAsc: Array<[number, Point2D<T>]> = distanceToPoint.sort(function (a: [number, Point2D<T>], b: [number, Point2D<T>]) {
                return a[0] - b[0];
            });
            //search the labels of the k-nearest points
            let labelsOfKNearest: Array<T> = [];
            for (let i = 0; i < k; i++) {
                labelsOfKNearest.push(sortedPointsAsc[i][1]['label'])
            }

            //create set with the label-categories of the k-nearest points
            let possibleCategory: Array<T> = Array.from(new Set(labelsOfKNearest));

            //count how often each category of the k-nearest points is present
            let amountEachCategoryOfKNearest: Array<[number, T]> = [];
            for (let i = 0; i < possibleCategory.length; i++) {
                amountEachCategoryOfKNearest.push([labelsOfKNearest.filter(label => label === possibleCategory[i]).length, possibleCategory[i]])
            }

            //sort categorys ba amount and give lable of the most present
            let resultingLable: Array<[number, T]> = amountEachCategoryOfKNearest.sort(function (a: [number, T], b: [number, T]) {
                return b[0] - a[0];
            });

            return resultingLable[0][1];

        }else {
            throw new Error('Content is empty - no neighbors found')
        }
    }
}

