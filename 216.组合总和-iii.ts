/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
    const resArr:number[][]=[]
    function backTracking(n: number, k: number,sum:number, startIndex: number, tempArr: number[]): void{
        if (sum > n) return
        if(tempArr.length === k){
            if (sum === n) {
                resArr.push([...tempArr])
                return
            }
        }
        // 剪枝
        // k - tempArr.length =m 剩余需要填充的数字个数
        // 9 - m + 1 剩余可填充的数字范围

        for (let i: number = startIndex;i<= 9 - (k - tempArr.length) + 1;i++){
            tempArr.push(i)
            backTracking(n, k, sum + i, i + 1, tempArr)
            tempArr.pop()
        }
    }
    backTracking(n, k, 0, 1, [])
    return resArr
};
// @lc code=end

