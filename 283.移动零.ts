/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length;i++){
        if (nums[i] !== 0) {
            [nums[lastNonZeroFoundAt] ,nums[i]] = [nums[i],nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
};
// @lc code=end

