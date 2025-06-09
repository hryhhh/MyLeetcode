/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0, mid, right = nums.length - 1;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (target < nums[mid]) {
            right = mid - 1;//到左区间去找
        } else if(target>nums[mid]){
            left = mid + 1;
        } else {
            return mid
        }
        
    }
    return -1
    
};
// @lc code=end

