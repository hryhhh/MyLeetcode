/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    //按首位排序
    //将第一个区间放入res
    //后面依次放入时，将其首位与列表末尾的末尾比较，若首<=末，则合并，否则直接放入
    intervals.sort((a, b) => a[0] - b[0])
    let res: number[][] = []
    for (let i of intervals) {
        if(res.length===0||res[res.length-1][1]<i[0]){

            res.push(i)
        } else {
            res[res.length-1][1]=Math.max(res[res.length-1][1],i[1])
        }
    }
    return res

};
// @lc code=end

