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
            //create new Point that will be labeld with this method
            let the_point = new Point2D(x, y, null);

            //calculate euclidean distance of the points in the neighbourhood to the point in question
            //give back nested array with distance and point
            let evaluatedPoints: Array<[number, Point2D<T>]> = this._content.map((point: Point2D<T>) => {
                return [Number((the_point.distance(point)).toFixed(2)), point];
            });

            //sort points in neighbourhood in ascending order
            let sorted: Array<[number, Point2D<T>]> = evaluatedPoints.sort(function (a: [number, Point2D<T>], b: [number, Point2D<T>]) {
                return a[0] - b[0];
            });
            console.log(sorted);

            //search the labels of the k-nearest points
            let labels: Array<T> = [];
            for (let i = 0; i < k; i++) {
                labels.push(sorted[i][1]['label'])
            }
            console.log(labels);

            //create set with the label-categories of the k-nearest points
            let category: Array<T> = Array.from(new Set(labels));
            console.log(category);

            //count how often each category of the k-nearest points is present
            let amountEachCategory: Array<[number, T]> = [];
            for (let i = 0; i < category.length; i++) {
                amountEachCategory.push([labels.filter(label => label === category[i]).length, category[i]])
            }
            console.log(amountEachCategory);

            //sort categorys ba amount and give lable of the most present
            let resultingLable: Array<[number, T]> = amountEachCategory.sort(function (a: [number, T], b: [number, T]) {
                return b[0] - a[0];
            });
            console.log("result", resultingLable[0][1]);
            return resultingLable[0][1];
        }else {
            throw new Error('Content is empty - no neighbors found')
        }
    }
}

