/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
    let len: number = s.length;
    let left: number = 0, right: number = 0;
    let arr: string[] = s.split('');
    for (let i = 0; i < len; i += (2 * k)){
        left = i;
        right = i + k - 1 >= len ? len - 1 : i + k - 1;
        while (left < right) {
            //i到i+k之间反转
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++;
            right--;
        }
    }
    return arr.join('');
};
// @lc code=end

