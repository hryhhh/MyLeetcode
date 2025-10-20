/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++){
        // 如果当前价格比最小价格还低，更新最小价格
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        
        } else {
            const curProfit = prices[i] - minPrice
            maxProfit= Math.max(maxProfit, curProfit)
        }
    }
    return maxProfit
};
// @lc code=end

