/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s === null || s.length < 2) {
        return s
    }
    let strLen = s.length
    let maxL = 0, maxR = 0
    let maxLen = 1
    let dp = new Array()
    for (let i = 0; i < strLen; i++) {
        dp[i] = new Array()
        for (let j = 0; j < strLen; j++) {
            dp[i][j] = false
        }
    }
    for (let r = 1; r < strLen; r++) {
        for (let l = 0; l < r; l++) {
            if (s.charAt(l) === s.charAt(r) && ((r - l) <= 2 || dp[l + 1][r - 1])) {
                dp[l][r] = true
                if (r - l + 1 > maxLen) {
                    maxLen = r - l + 1
                    maxL = l
                    maxR = r
                }
            }
        }
    }
    return s.slice(maxL, maxR+1)
};