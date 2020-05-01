import hashString from "../algorithms/StringHash";

export default class HashMap<K, V> {
    public hashMap: HashMap<K, V>;
    private readonly size: number;

    constructor(size = 31) {
        this.hashMap = new HashMap();
        this.size = size;
    }

    set(key: K, value: V) {
        let hashedKey = hashString(key, this.size);
        if (!this.hashMap[hashedKey]) {
            this.hashMap[hashedKey] = [];
        }
        this.hashMap[hashedKey].push([key, value]);
    }

    get(key: K): V {
        let hashedKey = hashString(key, this.size);
        if (this.hashMap[hashedKey]) {
            for (let i = 0; i < this.hashMap[hashedKey].length; i++) {
                if (this.hashMap[hashedKey][i][0] === key) {
                    return this.hashMap[hashedKey][i][1];
                }
            }
        } else {
            return undefined;
        }
    }

    contains(key: K): boolean {
        let hashedKey = hashString(key, this.size);
        if (this.hashMap[hashedKey]) {
            for (let i = 0; i < this.hashMap[hashedKey].length; i++) {
                if (this.hashMap[hashedKey][i][0] === key) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    delete(key: K): void {
        let hashedKey = hashString(key, this.size);
        if (this.hashMap[hashedKey]) {
            for (let i = 0; i < this.hashMap[hashedKey].length; i++) {
                if (this.hashMap[hashedKey][i][0] === key) {
                    this.hashMap[hashedKey].splice(i, 1);
                }
            }
        }
    }
}