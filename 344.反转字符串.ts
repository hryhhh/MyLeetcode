/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    for (let i = 0, j = s.length - 1; i < s.length, j > i; i++, j--){
        [s[i],s[j]]=[s[j],s[i]]
    }
    
};
// @lc code=end

