var isMatch = function (s, p) {
    var m = s.length
    var n = p.length
    if (m === 0 && n === 0)
        return true
    var dp = new Array()
    for (let i = 0; i < m + 1; i++) {
        dp[i] = new Array()
        for (let j = 0; j < n + 1; j++) {
            dp[i][j] = false
        }
    }
    dp[0][0] = true
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            //初始化步骤
            if(p.charAt(j - 1) === '*')
                dp[0][j] = dp[0][j - 2]
            if (s.charAt(i - 1) === p.charAt(j - 1) || p.charAt(j - 1) === '.') {
                //  常规匹配 1 次
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p.charAt(j - 1) === '*' && (s.charAt(i - 1) === p.charAt(j - 2) || p.charAt(j - 2) === '.')) {
                // 通配符匹配 0 次或多次
                dp[i][j] = dp[i][j - 2] || dp[i - 1][j]
            }
            else if (p.charAt(j - 1) === '*' && s.charAt(i - 1) !== p.charAt(j - 2)) {
                dp[i][j] = dp[i][j - 2]
            }
        }
    }
    console.log(dp[m][n])
    return dp[m][n]
};

isMatch("ab", ".*")