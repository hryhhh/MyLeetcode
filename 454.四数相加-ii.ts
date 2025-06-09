/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let numMap: Map<number, number> = new Map();//键是和，值是次数
    let res: number = 0;
    let count: number | undefined;
    for (let i of nums1) {
        for (let j of nums2) {
            count = numMap.get(i + j);
            //若和已存在，次数加一，否则记为1
            numMap.set(i + j, count ? count + 1 : 1);
        }
    }
    for (let k of nums3) {
        for (let l of nums4) {
            count = numMap.get(0 - (k + l));
            if (count) {
                res += count;
            }
        }
    }
    return res;
};
// @lc code=end

