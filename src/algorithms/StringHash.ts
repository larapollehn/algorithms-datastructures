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

console.log('hiyou', hashString('hiyou', 13));
console.log('baegle', hashString('baegle', 13));
console.log("what can i say, except you're welcome", hashString("what can i say, except you're welcome", 13));
console.log('hamster', hashString('hamster', 13));