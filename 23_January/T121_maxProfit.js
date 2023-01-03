/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length
    let profit = 0
    let pre_min = prices[0]
    for (let i = 1; i < len; i++) {
        pre_min = Math.min(prices[i], pre_min)
        profit = Math.max(prices[i] - pre_min, profit)
    }
    return profit
};