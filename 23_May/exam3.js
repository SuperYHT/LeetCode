function findXY(n) {
    let x = 1;
    let y = n;

    for (let i = 2; i <= n; i++) {
        let fact = 1;
        for (let j = 2; j <= i; j++) {
            fact *= j;
        }

        let currY = Math.floor(n / (fact - 1));
        if (currY * (fact - 1) == n && currY < y) {
            x = i;
            y = currY;
        }
    }
    
    return [x, y];
}
console.log(findXY(2))
