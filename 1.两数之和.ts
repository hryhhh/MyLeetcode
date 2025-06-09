/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let storeMap: Map<number, number> = new Map();
    // let resArr: number[] = [];
    let index: number | undefined;
    let len = nums.length;
    for (let i = 0; i < len; i++){
        //检测差值是否在Map中，index将是这个数的
        index = storeMap.get(target - nums[i]);

        if (index!==undefined) {
            return [index, i];
            
        }
        storeMap.set(nums[i], i);
    }
    
};
// @lc code=end

