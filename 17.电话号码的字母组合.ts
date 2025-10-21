/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    if(digits.length===0) return []
    const map: { [key: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    const res: string[] = []
    
    const backtrack = (index: number, cur: string): void => {
        // 递归终止条件:当前组合长度等于输入字符串长度
        if(index===digits.length){
            res.push(cur)
            return
        }
        // 获取当前数字对应的字母
        const curDigits = digits[index]
        for(const letter of map[curDigits]){
            backtrack(index+1, cur+letter)
        }
        
    }
    backtrack(0, '')
    return  res
};
// @lc code=end

