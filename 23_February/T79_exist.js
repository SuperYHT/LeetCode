var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const inArea = (r, c) => {
        if (r < 0 || r > m - 1 || c < 0 || c > n - 1) {
            return true
        } else {
            return false
        }
    }
    const search = (r, c, index) => {
        if (index > word.length - 1) {
            return true;
        }
        if (inArea(r, c) || word.charAt(index) !== board[r][c] || dp[r][c] === 1) {
            return false
        }
        dp[r][c] = 1;
        let up = search(r - 1, c, index + 1);
        let down = search(r + 1, c, index + 1);
        let left = search(r, c - 1, index + 1);
        let right = search(r, c + 1, index + 1);
        if (!(up || down || left || right)) {
            dp[r][c] = 0;
        }
        return true && (up || down || left || right);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (word[0] === board[i][j]) {
                if (search(i, j, 0)) {
                    return true
                }
            }
        }
    }
    return false
};
let flag = exist([["E", "D", "C"], ["F", "A", "B"], ["G", "H", "I"]], "ABCDEFGHI");
console.log(flag)