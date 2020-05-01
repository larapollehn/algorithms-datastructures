import exp = require("constants");
export default function hashString(str: string, size: number): number {
    let hash = 0;
    const prime = 37;
    for (let i = 0; i < Math.min(str.length, 50); i++){
        let char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = ((hash & hash) * prime) % size;
    }
    return hash;
}
