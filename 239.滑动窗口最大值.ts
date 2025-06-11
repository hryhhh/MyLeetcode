/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    let deque: number[] = [];
    let res: number[] = [];
    for (let i = 0; i < nums.length; i++){
        if ( deque[0] <= i - k) {
            deque.shift(); // 移除过期的元素
        }
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop()//维持单调递减
        }
        deque.push(i); // 将当前元素的索引添加到队列中
        if (i >= k - 1) {
            res.push(nums[deque[0]]); // 当窗口大小达到 k 时，添加最大值到结果中
        }
    }
    return res;
    
    
};
// @lc code=end

