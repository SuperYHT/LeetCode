/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths1 = function (m, n) {
    ans = process1(1, 1, m, n)
    return ans
};
//暴力递归
function process1(p, q, m, n) {
    if (p === m && q === n) {
        return 1
    }
    if (p > m || q > n) {
        return 0
    }
    return process1(p + 1, q, m, n) + process1(p, q + 1, m, n)
}
//动态规划(记忆化搜索)
var uniquePaths2 = function (m, n) {
    const dp = Array.from(Array(m), () => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1
            } else if (i > 0 && j > 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[m - 1][n - 1]
};