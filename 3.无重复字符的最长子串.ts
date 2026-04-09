/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>();

    let left = 0;       // 滑动窗口左边界
    let maxLen = 0;     // 记录最长子串长度

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // 如果字符已在 map 中，且其索引在当前窗口内 (>= left)
        if (map.has(char) && map.get(char)! >= left) {
            // 移动左边界到重复字符的下一位
            left = map.get(char)! + 1;
        }

        // 更新字符的最新索引
        map.set(char, right);

        // 计算当前窗口长度并更新最大值
        // 当前窗口为 [left, right]，长度为 right - left + 1
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
// @lc code=end

