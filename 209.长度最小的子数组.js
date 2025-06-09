/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    let i = 0,sum=0;
    for (let j = 0; j < nums.length; j++){
        sum += nums[j];
        while (sum >= target) {
            minLength = Math.min(minLength,j-i+1)
            sum -= nums[i++];
        }
    }
    return minLength === Infinity ? 0 : minLength;
};
// @lc code=end

