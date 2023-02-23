var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    let set = new Set();
    wordDict.forEach((word) => {
        set.add(word)
    })
    dp[0] = true;
    for (let i = 1, pre = 0; i <= s.length; i++) {
        let word = s.slice(pre, i)
        console.log(word);
        if (set.has(word)) {
            pre = i;
            dp[i] = dp[i - word.length];
        }

    }
    return dp[s.length];
};

wordBreak("aaaaaaa", ["aaaa", "aaa"])