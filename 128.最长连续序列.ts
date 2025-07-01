/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    const numSet: Set<number> = new Set(nums)
    let longestStreak: number = 0
    
    let max: number = 0;
    for (const num of numSet) {
        // 如果当前数字没有前一个数字，说明当前数字是连续序列的第一个数字
        if (!numSet.has(num - 1)) {
            let curNum: number = num;// 当前数字
            let curStreak: number = 1;// 当前连续序列的长度

            // 继续向后查找连续序列
            while (numSet.has(curNum + 1)) {
                curNum += 1
                curStreak += 1
                
            }
            // 更新最长连续序列的长度
            longestStreak=Math.max(longestStreak,curStreak)
        }
    }
    return longestStreak
};
// @lc code=end

