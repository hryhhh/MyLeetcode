/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  let res: number[] = new Array(26).fill(0);
  let cur: number = "a".charCodeAt(0);//cur=97

  if (s.length !== t.length) {
    return false;
  }
    for (let i = 0; i < s.length; i++) {
    //得到的差值对应于res数组的下标，进行加一或减一
    res[s.charCodeAt(i) - cur]++;
    res[t.charCodeAt(i) - cur]--;
  }

  //使用 every 方法检查res中的每个元素是否都为 0
  return res.every((i) => i === 0);
};
// @lc code=end

