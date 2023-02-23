//暴力递归
var numDistinct1 = function(s, t) {
	const sLen = s.length, tLen = t.length
	
	function helper(i, j) {
		if (j < 0) {
			return 1
		}
		if (i < 0) {
			return 0
		}
		
		if (s[i] == t[j]) {
			return helper(i-1, j) + helper(i-1, j-1)
		} else {
			return helper(i-1, j)
		}
	}
	return helper(sLen-1, tLen-1) 
};


//记忆化搜索
var numDistinct2 = function(s, t) {
	const sLen = s.length, tLen = t.length
	memo = new Array(sLen)
	for (let i = 0; i < sLen; i++) {
		memo[i] = new Array(tLen)
		for (let j = 0; j < tLen; j++) {
			memo[i][j] =  -1
		}
	}
	function helper(i, j) {
		if (j < 0) {
			return 1
		}
		if (i < 0) {
			return 0
		}
		if (memo[i][j] !=  -1) { 
			return memo[i][j]
		}
		if (s[i] == t[j]) {
			memo[i][j] = helper(i-1, j) + helper(i-1, j-1)
		} else {
			memo[i][j] = helper(i-1, j)
		}
		return memo[i][j]
	}
	return helper(sLen-1, tLen-1) 
};

//动态规划
var numDistinct3 = function(s, t) {
	const sLen = s.length, tLen = t.length
	dp = new Array(sLen+1)
	for (let i = 0; i < sLen+1; i++) {
		dp[i] = new Array(tLen+1).fill(0)
	}
	for (let i = 0; i < sLen+1; i++) {
		for (let j = 0; j < tLen+1; j++) {
			if (j == 0) {		
				dp[i][j] = 1
			} else if (i == 0) { 
				dp[i][j] = 0
			} else {			
				if (s[i-1] == t[j-1]) {
					dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
				} else {
					dp[i][j] = dp[i-1][j]
				}
			}
		}
	}
	return dp[sLen][tLen]
}

