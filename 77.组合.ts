/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, currentCombination: number[]): void {
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i <= n; i++) {
            currentCombination.push(i); // 选择一个数
            backtrack(i + 1, currentCombination); // 递归处理下一个位置
            currentCombination.pop(); // 撤销选择，回溯
        }
    }

    backtrack(1, []);
    return result;
};
// @lc code=end

