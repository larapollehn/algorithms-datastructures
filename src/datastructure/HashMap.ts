import hashString from "../algorithms/StringHash";

export default class HMap<V> {
    public bucket: any;
    public readonly size: number;

    constructor(size = 31) {
        this.bucket = new Array(size);
        this.size = size;
    }

    set(key: string, value: V) {
        let hashedKey = this.hash(key);
        if (!this.bucket[hashedKey]) {
            this.bucket[hashedKey] = [];
        }
        this.bucket[hashedKey].push([key, value]);
    }

    get(key: string): V {
        let hashedKey = this.hash(key);
        if (this.bucket[hashedKey]) {
            for (let i = 0; i < this.bucket[hashedKey].length; i++) {
                if (this.bucket[hashedKey][i][0] === key) {
                    return this.bucket[hashedKey][i][1];
                }
            }
        } else {
            return undefined;
        }
    }

    contains(key: string): boolean {
        let hashedKey = this.hash(key);
        if (this.bucket[hashedKey]) {
            for (let i = 0; i < this.bucket[hashedKey].length; i++) {
                if (this.bucket[hashedKey][i][0] === key) {
                    return true;
                }
            }
            return false;
        }else {
            return false;
        }
    }

    delete(key: string): void {
        let hashedKey = this.hash(key);
        if (this.bucket[hashedKey]) {
            for (let i = 0; i < this.bucket[hashedKey].length; i++) {
                if (this.bucket[hashedKey][i][0] === key) {
                    this.bucket[hashedKey].splice(i, 1);
                }
            }
        }
    }

    hash(key: string){
        return hashString(key, this.size);
    }
}