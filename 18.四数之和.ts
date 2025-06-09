/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  let len: number = nums.length;
  let left: number, right: number;
  for (let i = 0; i < len; i++) {
    if (nums[i] > target && (nums[i] > 0 || target > 0)){
      break;//剪枝
    }
    if (i > 0 && nums[i] === nums[i - 1]) {//去重
      continue;
    }
    for (let j = i + 1; j < len; j++){
      if (nums[j] + nums[i] > target && target > 0) {
        //两个元素的和已经大于目标值且目标值为正,剪去
        break;
      }
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        
        continue;
      }

      left = j + 1, right = len - 1;
      
      while (left < right) {
        const sum: number = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left<right&&nums[right] === nums[right - 1]) right--;
          while (left<right&&nums[left] === nums[left + 1]) left++;

          left++;
          right--;
        }
      }
    }
  }
  return res;
};
// @lc code=end

