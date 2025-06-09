/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  // 去除首尾空格并将多个空格缩减为一个空格
  s = s.trim().replace(/\s+/g, " ");
  // 将字符串转换为字符数组
  const strArray = Array.from(s);
  // 翻转整个字符数组
  reverse(strArray, 0, strArray.length - 1);

  let start = 0;
  for (let end = 0; end <= strArray.length; end++) {
    if (end === strArray.length-1 || strArray[end+1] === " ") {
      // 翻转每个单词
      reverse(strArray, start, end);
      start = end + 2;
    }
  }

  return strArray.join("");

  function reverse(arr: string[], start: number, end: number): void {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
}
// @lc code=end
