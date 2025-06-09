/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++){
      if (nums[fast] !== val) {
        nums[slow] = nums[fast];
        slow++;
      }
      //如果nums[fast] == val，则不执行任何操作，直接继续循环
    }
    return slow;
};
// @lc code=end
