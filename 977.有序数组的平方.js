/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let i = 0,
    j = n - 1,
    k = n - 1;
  var res = new Array(n).fill(0);
  while (i <= j) {
    let left = nums[i] * nums[i],
      right = nums[j] * nums[j];

    if (left < right) {
      res[k--] = right;
      j--;
    } else {
      res[k--] = left;
      i++;
    }
  }
  return res;
};
// @lc code=end
