/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    let numArr: number[] = new Array(26).fill(0);
    let base: number = 'a'.charCodeAt(0);
    let index: number;
    for (let i = 0; i < magazine.length; i++){
        //获取杂志字符编码的对应数组索引，将索引对应的值加一，表示该字符存在
        numArr[magazine[i].charCodeAt(0)-base]++;

    }
    for (let j = 0; j < ransomNote.length; j++){
      //获取赎金信字符编码的对应数组索引
      index = ransomNote[j].charCodeAt(0) - base;
      numArr[index]--;
      if (numArr[index] < 0) {
        return false;
      }
    }
    return true;
};
// @lc code=end

