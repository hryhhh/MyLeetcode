/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const countMap: Map<number, number> = new Map();
    for (let num of nums) {
    //获取当前 num 的计数值,如果获取不到，则默认为 0,+ 1 将次数加 1
    countMap.set(num, (countMap.get(num) || 0) +1);
  }
  return [...countMap.entries()] // 将 Map 转换为数组
    .sort((a, b) => b[1] - a[1])//降序
    .slice(0, k)
    .map((i) => i[0]);
}
// @lc code=end
