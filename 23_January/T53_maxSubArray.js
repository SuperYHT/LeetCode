/**
 * @param {number[]} nums
 * @return {number}
 */
var canJump = function (nums) {
    let dp = new Array()
    const len = nums.length
    dp[0] = nums[0]
    let max = nums[0]
    for (let i = 0; i < len; i++) {
        if (i <= max) {
            dp[i] = i + nums[i]
            max = Math.max(max, dp[i])
        }
    }
    if (max + 1 >= len) { 
        return true
    } else {
        return false
    }
};
