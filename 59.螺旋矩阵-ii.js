/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let count = 1;
    let top = 0,
        right = n - 1,
        bottom = n - 1,
        left = 0;
    //创建一个n*n矩阵，并用0 初始化
    const nums = Array.from({ length: n }, () => Array(n).fill(0));

    while (top <= bottom && left <= right) {
        //填充上边界，从左到右
        for (let i = left; i <= right; i++){
            nums[top][i] = count++;
        }
        top++;
        // 右边界
        for (let i = top; i <= bottom; i++){
            nums[i][right] = count++;
        }
        right--;
        //检查是否继续填充下和左边界
        if (top <= bottom) {
            for (let i = right; i >= left;i--){
            nums[bottom][i] = count++;
            
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--){
                nums[i][left] = count++;
            }
        }
        left++;
        
    }
    return nums;
};
// @lc code=end

