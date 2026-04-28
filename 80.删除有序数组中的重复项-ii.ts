/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    // if (nums.length <= 2) return nums.length;

    // let slow = 2; // 慢指针，指向下一个有效位置

    // for (let fast = 2; fast < nums.length; fast++) {
    //     // 如果当前元素与慢指针前两个位置的元素不同
    //     // 说明当前元素可以保留（最多允许出现两次）
    //     if (nums[fast] !== nums[slow - 2]) {
    //         nums[slow] = nums[fast];
    //         slow++;
    //     }
    // }

    // return slow;

    //使用一个计数器来跟踪当前元素的出现次数
    if (nums.length <= 2) return nums.length;

    let slow = 1; // 慢指针
    let count = 1; // 当前元素的出现次数

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] === nums[fast - 1]) {
            count++;
        } else {
            count = 1; // 遇到新元素，重置计数器
        }

        // 如果当前元素出现次数不超过2次，则保留
        if (count <= 2) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
};
// @lc code=end