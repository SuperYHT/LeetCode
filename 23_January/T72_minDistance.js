/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length
    const n = word2.length
    if (m * n === 0) {
        return n + m
    }
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    // 边界状态初始化
    for (let i = 0; i < m + 1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j < n + 1; j++) {
        dp[0][j] = j;
    }
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            deleteS = dp[i - 1][j] + 1
            insertS = dp[i][j - 1] + 1
            replaceS = dp[i - 1][j - 1]
            if (word1[i - 1] !== word2[j - 1]) {
                replaceS++
            }
            dp[i][j] = Math.min(deleteS, Math.min(insertS, replaceS))
        }
    }
    return dp[m][n]
};