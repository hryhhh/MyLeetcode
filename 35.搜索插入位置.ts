/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        //在处理大数组时，避免(left + right)可能导致的溢出
        //Math.floor 向下取整
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid
        }else if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left; //left是最终第一个大于target的位置
};
// @lc code=end

