/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
    
    const stack: string[] = []
    let i: number = 0;
    while (i < s.length) {
        let top: string = stack[stack.length - 1];
        if (top === s[i]) {
           stack.pop() 
        } else {
            stack.push(s[i])
        }
        i++;
    }
    let res: string = ''
    while (stack.length > 0) {
        res = stack.pop() + res;
    }
    return res;
};
// @lc code=end

