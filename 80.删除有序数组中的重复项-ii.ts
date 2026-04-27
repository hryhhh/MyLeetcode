/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let slow = 2; // 慢指针，指向下一个有效位置

    for (let fast = 2; fast < nums.length; fast++) {
        // 如果当前元素与慢指针前两个位置的元素不同
        // 说明当前元素可以保留（最多允许出现两次）
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
};
// @lc code=end