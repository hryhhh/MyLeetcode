/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    
    const groups: Map<string, string[]> = new Map()
    //将排序后的字符串做为键key，异位词组成的数组作为 value
    for (const s of strs) {
        const key = [...s].sort().join('')
        if (!groups.has(key)) {
            groups.set(key,[])
        }
        groups.get(key)!.push(s)
    }
    return Array.from(groups.values())

};
// @lc code=end

