// 暴力递归
var climbStairs = function (n) {
    var ans = climb(0, 0, n);
    console.log('暴力递归', ans)
    var dp = new Array(n + 1).fill(0)
    climb_dp(dp, n)
    ans = dp [n]
    console.log('表结构', ans)
    return ans
};

function climb(ans, cur, n) {
    if (cur > n) {
        return 0
    }
    if (cur === n) {
        return 1
    }
    if (cur < n) {
        ans = ans + 1
        return climb(ans, cur + 1, n) + climb(ans, cur + 2, n)
    }

}
function climb_dp(dp, n) {
    if (n < 2) {
        return 1
    }
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i < n+1 ; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
}
climbStairs(44)