function hashString(str: string): number {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++){
        let char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
}

console.log('hiyou', hashString('hiyou'));
console.log('baegle', hashString('baegle'));
console.log("what can i say, except you're welcome", hashString("what can i say, except you're welcome"));
console.log('hamster', hashString('hamster'));