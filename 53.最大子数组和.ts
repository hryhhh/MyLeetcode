/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let curSum: number = nums[0];
    let maxSum: number = nums[0]
    
    if (!nums|| nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    //从第二个元素开始遍历，因为已经初始化了curSum和maxSum为第一个元素的值了
    for (let i = 1; i < nums.length; i++){
        curSum = Math.max(nums[i], curSum + nums[i])
        maxSum=Math.max(maxSum,curSum)
    }
    return maxSum;
};
// @lc code=end

