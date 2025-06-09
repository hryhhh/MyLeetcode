/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {

    // //1.HashSet 适用于数值跨度大，没有限制数目的大小
    // //占用空间大，速度慢
    // let res: Set<number> = new Set();
    // let nums1Set: Set<number> = new Set(nums1);
    // for (let i of nums2) {
    //     //若nums2中的元素在nums1集合中，添加
    //     if (nums1Set.has(i)) {
    //         res.add(i);
    //     }
    // }
    // //将结果转换为数组
    // return Array.from(res);

    //2.Hash数组
    const result: Set<number> = new Set();
    const hashArr: number[] = new Array(1001).fill(0);
    //遍历num1，在hash数组上做标记，对应则为1
    for (const i of nums1){
        if (i >= 0 && i < 1001) {
            hashArr[i] = 1;
        }
    }
    //遍历num2，num1中有且num2也有，添加到结果集合，利用集合特性过滤掉重复元素
    for (const i of nums2) {
        if (i >= 0 && i < 1001 && hashArr[i] === 1) {
            result.add(i);
        }
    }
    return Array.from(result);
};
// @lc code=end

