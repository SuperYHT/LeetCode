/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses_1 = function (s) {
    strlen = s.length
    let left = 0
    let right = 0
    let maxs = 0
    if (s.length === 0) {
        return 0
    }
    for (let i = 0; i < strlen; i++) {
        if (s[i] === '(') {
            left++
        } else {
            right++
        }
        if (right === left) {
            maxs = Math.max(maxs, right * 2)
        } else if (right > left) {
            left = 0
            right = 0
        }
    }
    left = 0
    right = 0
    for (let i = strlen - 1; i > -1; i--) {
        if (s[i] === '(') {
            left++
        } else {
            right++
        }
        if (right === left) {
            maxs = Math.max(maxs, left * 2)
        } else if (left > right) {
            left = 0
            right = 0
        }
    }
    return maxs
};



var longestValidParentheses_2 = function (s) {
    let maxs = 0
    let dp = new Array(s.length).fill(0)
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i > 1) ? (dp[i - 2] + 2) : 2
            } else if (s[i - dp[i - 1] - 1] === '(' ) {
                dp[i] = ((i - dp[i - 1]) > 1) ? (dp[i - 1] + dp[i - dp[i - 1]-2]+ 2) : (dp[i - 1] + 2)
            }
        }
        maxs = Math.max(maxs, dp[i])
    }
    console.log(dp)
    return maxs
}