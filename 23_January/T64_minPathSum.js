/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    m = grid.length
    n = grid[0].length
    const dp = Array.from(Array(m), () => new Array(n).fill(0));
    dp[0][0] = grid[0][0]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j > 0) {
                dp[i][j] = grid[i][j] + dp[i][j - 1]
            } else if (j === 0 && i > 0) {
                dp[i][j] = grid[i][j] + dp[i - 1][j]
            }
            else if (i > 0 && j > 0) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
            }
        }
    }
    return dp[m - 1][n - 1]
};
minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])
