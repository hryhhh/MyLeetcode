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
    //双指针
    // let left = 0, right = 0;
    // let res: number[] = [];
    // while (left < m && right < n) {
    //     if (nums1[left] < nums2[right]) {
    //         res.push(nums1[left]);
    //         left++;
    //     } else {
    //         res.push(nums2[right]);
    //         right++;
    //     }
    // }
    // while (left < m) {
    //     res.push(nums1[left]);
    //     left++;
    // }
    // while (right < n) {
    //     res.push(nums2[right]);
    //     right++;
    // }
    // for (let i = 0; i < res.length; i++) {
    //     nums1[i] = res[i];
    // }

    // 逆向双指针 time: O(m + n) space: O(1)
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;

        // 处理剩余元素
        while (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
};
// @lc code=end

