/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
function numSquares(n: number): number {
    const dp: number[] = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    
    for (let i = 1; i <= n; i++){
        for (let j = 1; j * j <= i; j++){
            dp[i]=Math.min(dp[i], dp[i - j * j] + 1)
        }
    }
    return dp[n]
};
// @lc code=end

