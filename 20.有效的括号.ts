/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack: string[] = []
    const bracketMap: Record<string, string> = { 
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i of s) {
        if(bracketMap.hasOwnProperty(i)) {
            stack.push(bracketMap[i]);
        } else if ( i !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
    
};
// @lc code=end

