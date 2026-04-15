/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let left = 0, right = 0;
    let res: number[] = [];
    while (left < m && right < n) {
        if (nums1[left] < nums2[right]) {
            res.push(nums1[left]);
            left++;
        } else {
            res.push(nums2[right]);
            right++;
        }
        

    }
    while (left < m) {
        res.push(nums1[left]);
        left++;
    }
    while (right < n) {
        res.push(nums2[right]);
        right++;
    }
    for (let i = 0; i < res.length; i++) {
        nums1[i] = res[i];
    }
};
// @lc code=end

